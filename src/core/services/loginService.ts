import { NavigateFunction} from "react-router-dom";
import get from 'lodash/get';

import { apiRequest } from '../api/apiRequest';
import { IServiceProps } from '../interfaces/IServiceProps';
import { LOGIN } from '../api/constants';
import { setLocalStorage } from '../localStorage';
import getUserData from './getUserData';
import addNotifications from '../providers/notifications/actions/addNotification'


const loginService = async (data: IServiceProps, navigate: NavigateFunction): Promise<any> => {
    try {
        const response = await apiRequest({
            purpose: LOGIN,
            payload: {
                method: 'post',
                data,
            },
            showNotification: 'error'
        });
        console.log(response);

        setLocalStorage('authorization', response.data.authorization);
        setLocalStorage('refreshAuthorization', response.data.refreshAuthorization);

        getUserData();

   } catch (error) {
    addNotifications({
        id: Date.now(),
        title: 'Error',
        description: get(error, 'message', ''),
        type: 'error'
    })
   }
}

export default loginService;
