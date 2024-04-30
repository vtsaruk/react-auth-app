import React, { FC } from "react";
import { useMsal, MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, LogLevel } from "@azure/msal-browser";

import loginMicrosoftService from "../../core/services/loginMicrosoftService";

const msalConfig = {
    auth: {
        clientId: `${process.env.REACT_APP_MICROSOFT_CLIENT_SECRET}`,
        authority: "https://login.microsoftonline.com/07216753-8b5a-4ad1-9796-dab7e249afac/oauth2/v2.0/authorize",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level: any, message: any, containsPii: any) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
  };
  
  const pca = new PublicClientApplication(msalConfig);


function MicrosoftLogin  () {
    const { instance } = useMsal();
    
    return (
        <button onClick={() => loginMicrosoftService(instance)}>MicrosoftLogin</button> 
    );
};

function MicrosoftWrapper (Component: FC) {
    return function () {
        return (
            <MsalProvider instance={pca}>
               <Component />
            </MsalProvider>
        )
    }
}

export default MicrosoftWrapper(MicrosoftLogin);
