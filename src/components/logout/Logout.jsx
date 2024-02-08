import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/auth.context';

const Logout = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (!currentUser || loading) return;

	return <button onClick={logout}>Logout</button>;
};

const logout = async () => {
	await signOut(auth);
};

export default Logout;
