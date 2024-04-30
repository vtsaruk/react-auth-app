import get from 'lodash/get';
import { IPublicClientApplication } from "@azure/msal-browser";
import {apiRequest} from '../api/apiRequest';
import getUserData from './getUserData';
import { MICROSOFT_LOGIN } from '../api/constants';
import { setLocalStorage } from '../localStorage';
import addNotifications from '../providers/notifications/actions/addNotification';


const loginRequest = {
    scopes: ["User.Read"]
};

const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

async function callMsGraph(accessToken: string) {
    setLocalStorage('authorization', accessToken);

    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}


const loginMicrosoftService = async (instance: IPublicClientApplication): Promise<any> => {
    try {        
        const { accessToken } = await instance.loginPopup(loginRequest);
        const { displayName } = await callMsGraph(accessToken);

        const response = await apiRequest({
            purpose: MICROSOFT_LOGIN,
            payload: {
                method: 'post',
                data: {
                    token: accessToken,
                    displayName
                },
            },
            showNotification: 'error'
        });
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

export default loginMicrosoftService;
