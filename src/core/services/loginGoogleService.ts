import { jwtDecode } from 'jwt-decode';
import get from 'lodash/get';
import { apiRequest } from '../api/apiRequest';
import { GOOGLE_LOGIN } from '../api/constants';
import getUserData from './getUserData';
import { setLocalStorage } from '../localStorage';
import addNotifications from '../providers/notifications/actions/addNotification'


export const loginGoogleSuccessService = async (res: any): Promise<any> => {
    try {
        const userData = jwtDecode(res.credential);
        setLocalStorage('authorization', res.credential);

        const response = await apiRequest({
            purpose: GOOGLE_LOGIN,
            payload: {
                method: 'post',
                data: {
                    token: res.credential,
                    displayName: get(userData, 'name', ''),
                },
            },
            showNotification: 'error'
        });

        setLocalStorage('authorization', response.data.authorization);
        setLocalStorage('refreshAuthorization', response.data.refreshAuthorization);

        getUserData();
   } catch (err) {
    addNotifications({
        id: Date.now(),
        title: 'Error',
        description: get(err, 'message', ''),
        type: 'error'
    })
   }
}

export const loginGoogleErrorService = async () => {

}
