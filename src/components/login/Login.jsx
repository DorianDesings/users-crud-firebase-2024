import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/auth.context';

const Login = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (currentUser || loading) return;

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={loginUser}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<button>Login</button>
			</form>
		</>
	);
};

const loginUser = async event => {
	event.preventDefault();
	const { email, password } = event.target;
	const registerValues = {
		email: email.value,
		password: password.value
	};

	console.log();

	try {
		await signInWithEmailAndPassword(
			auth,
			registerValues.email,
			registerValues.password
		);
	} catch (error) {
		console.error('Error al logear usuario:', error.code, error.message);
	}
};

export default Login;
