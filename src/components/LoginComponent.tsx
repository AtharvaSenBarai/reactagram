import { SignupFormComponent } from './SignupFormComponent';
import { LoginFormComponent } from './LoginFormComponent';
import { useState, useEffect } from 'react';
import { AuthFormComponent } from './AuthFormComponent';
import { Login } from '../styled-components/authStyles';

export const LoginComponent = () => {
	const [signupUser, setSignupUser] = useState({ email: '', password: '' });

	return (
		<Login>
			<AuthFormComponent signupUser={signupUser}>
				<LoginFormComponent signupUser={signupUser} />
			</AuthFormComponent>
		</Login>
	);
};
