import React, { FC } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { loginGoogleErrorService, loginGoogleSuccessService} from '../../core/services/loginGoogleService'

function GoogleAuth () {
  return (
    <GoogleLogin
      onSuccess={loginGoogleSuccessService}
      onError={loginGoogleErrorService}
    />
  )
};

export function GoogleAuthWrapper (Component: FC) {
  return function () {
    return (
      <GoogleOAuthProvider  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
        <Component />
      </GoogleOAuthProvider>
    );
  }
}

export default GoogleAuthWrapper(GoogleAuth);


