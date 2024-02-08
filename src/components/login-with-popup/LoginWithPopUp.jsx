import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/auth.context';
const provider = new GoogleAuthProvider();
const LoginWithPopUp = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (currentUser || loading) return;
	return (
		<>
			<h2>SOCIAL LOGIN</h2>
			<button onClick={signInWithGoogle}>Login With Google</button>
		</>
	);
};

const signInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.log(error);
	}
};

export default LoginWithPopUp;
