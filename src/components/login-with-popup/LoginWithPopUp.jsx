import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import withAuth from '../../hocs/withAuth';
const provider = new GoogleAuthProvider();
const LoginWithPopUp = () => {
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

export default withAuth(LoginWithPopUp);
