import { apiRequest } from '../api/apiRequest';
import setUser from '../providers/users/actions/setUser';
import { GET_USER_DATA } from '../api/constants';
import { getLocalStorage } from '../localStorage';

const getUserData = async () => {
    console.log('getLocalStorage  = authorization', getLocalStorage('authorization'))
    if (!getLocalStorage('authorization')) {
        return;
    }

    try {
        const { data } = await apiRequest({
            purpose: GET_USER_DATA,
            payload: {
                method: 'get',
                data: undefined
            },
            showNotification: 'error'
        });
        setUser({ displayName: data.displayName });
    } catch (err) {

   }
}

export default getUserData;
