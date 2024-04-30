import React from 'react';
import reduce from 'lodash/reduce';

type TField = [string, string|number]

export const getValues = (fieldNames:string[], evt:React.FormEvent<HTMLFormElement> ) => {
	evt.preventDefault();
	// @ts-ignore
	const data = Object.fromEntries(new FormData(evt.target));
	
	return reduce(
		fieldNames,
		(list, fieldName) => ({...list, [fieldName]: data[fieldName]}), 
	    {}
	)
}
