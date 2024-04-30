import { apiRequest } from '../api/apiRequest';
import { LOGOUT } from '../api/constants';
import { removeLocalStorage } from '../localStorage';
import logoutUser from '../providers/users/actions/logoutUser';

const loginService = async (): Promise<any> => {
    try {
        const response = await apiRequest({
            purpose: LOGOUT,
            payload: {
                method: 'post',
                data: undefined,
            },
            showNotification: 'error'
        });
        
        if (response.status === 200) {
            removeLocalStorage('authorization');
            removeLocalStorage('refreshAuthorization');
            logoutUser();
        }

   } catch (err) {
    console.log('loginService = err = ', err)
   }
}

export default loginService;
