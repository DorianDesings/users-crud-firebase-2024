import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/auth.context';

const Register = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (currentUser || loading) return;

	return (
		<>
			<h2>REGISTER</h2>
			<form onSubmit={registerUser}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<button>REGISTER</button>
			</form>
		</>
	);
};

const registerUser = async event => {
	event.preventDefault();
	const { email, password } = event.target;
	const registerValues = {
		email: email.value,
		password: password.value
	};

	try {
		await createUserWithEmailAndPassword(
			auth,
			registerValues.email,
			registerValues.password
		);
	} catch (error) {
		console.error('Error al registrar usuario:', error.code, error.message);
	}
};

export default Register;
