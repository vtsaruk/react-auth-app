import React from "react";
import { useNavigate } from "react-router-dom";


import { ThemeProvider} from '@mui/material'
import Box from '@mui/material/Box';

import { GoogleAuth } from '../components/GoogleAuth';
import { MicrosoftAuth } from "../components/MicrosoftAuth";

import { Paper, InputText, FieldItem, Grid, LoadingButton, Typography, Form } from "../components/common";

import { useFormData } from "../hooks/useFormData";

import { EMAIL_PATTERN } from '../helpers/patterns';

import loginService from "../core/services/loginService";
import { LOGIN } from '../core/api/constants'

import loginTheme from '../pageThemes/LoginTheme';
import { getFormValues } from "../helpers/getFormValues";

const DEFAULT_VALUES = {
	email: null,
	password: null 
}

const rules = {
  email: [
	{ pattern: EMAIL_PATTERN, message: 'Email is incorrect' },
	{ required: true, message: 'Email is require'}
  ],
  password: [
	{ required: true, message: 'Password is require'},
	{ minLen: 6, message: "Password has min 6 symbols" }
  ]
}

function Login () {
	const { values, errors, utils } = useFormData(DEFAULT_VALUES);
	const navigate = useNavigate();

	const handleFormSubmit = () => loginService(getFormValues(Object.keys(DEFAULT_VALUES), values), navigate);

	return (
		<ThemeProvider theme={loginTheme}>
		<Grid container className="login-body-wrapper">
			<Paper elevation={3}>
			    <Typography component="h3" variant="h3" text="Login" />
			    <Form autocomplete="off" >
			    	<FieldItem className="login-input-wrapper">
			    		<InputText
						    autoCapitalize="off"
							autoComplete="off"
			    		    rules={rules.email}
			    			autoFocus
			    			type="email"
			    			id="login-email-input"
			    			name="email"
			    			label="Email"
							changeValue={utils.changeValue}
							variant="standard"
							errorMessage={errors.email}								
			    		/> 
			    	</FieldItem>
			    	<FieldItem className="login-input-wrapper">
			    	    <InputText
						    rules={rules.password}
			    			type="password"
			    			id="login-password-input"
			    			name="password"
			    			label="Password"
							changeValue={utils.changeValue}
							variant="standard"
							errorMessage={errors.password}								
			    		/>
			    	</FieldItem>
			    	<Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px 0' }}>
						<GoogleAuth />
						<MicrosoftAuth />
			    	</Box>
			    	<Box sx={{display: 'flex', justifyContent: 'center'}}>
			    		<LoadingButton
						   type="button"
						   urlKey={LOGIN}
						   disabled={utils.toIsDisable(values)}
						   onClick={handleFormSubmit}
						>
							<span>Login</span>
						</LoadingButton>
			    	</Box>
			    </Form >
			</Paper>
		</Grid>
		</ThemeProvider>
	);
};

export default Login;
