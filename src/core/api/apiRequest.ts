import get from 'lodash/get';
import apiConfig from './apiConfig';
import axios from './axios';
import { getLocalStorage } from '../localStorage';
import addNotifications from '../providers/notifications/actions/addNotification'

interface IPayload {
  method: "get" | 'post'| 'delete' | 'patch' | 'put';
  data: Record<string,string|number> | undefined;
}

interface IApiRequestProps {
  purpose:string;
  payload:IPayload;
  showNotification?: 'all' | 'error' | 'success';
}

export const apiRequest = ({purpose, payload, showNotification }:IApiRequestProps) => {
  const { method, data = {} } = payload;

  return axios[method](
  	apiConfig[purpose],
  	{
  		request: data,
  		headers: {
  			'Content-Type': 'application/json',
			'authorization': getLocalStorage('authorization'),
			'refreshAuthorization': getLocalStorage('refreshAuthorization'),	
  		},
  	}
  )
  .then((response) => {
  	if (showNotification === 'all' || showNotification === 'success') {
  		addNotifications({
  			id: Date.now(),
  			title: 'Status Ok',
  			description: '',
  			type: 'success'
  		})
  	}
  	
  	return response.data;
  })
  .catch((error) => {
  	if (showNotification === 'all' || showNotification === 'error') {
  		addNotifications({
  			id: Date.now(),
  			title: 'Error',
  			description: get(error, 'message', ''),
  			type: 'error'
  		})
      }
  });
};
