import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import withAuth from '../../hocs/withAuth';

const Login = () => {
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

export default withAuth(Login);
