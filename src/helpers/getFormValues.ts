import reduce from 'lodash/reduce';


export const getFormValues = (fieldNames:string[], values:Record<string, string | null> ) => {
	
	return reduce(
		fieldNames,
		(list, fieldName) => ({...list, [fieldName]: values[fieldName] || ''}), 
	    {}
	)
}
