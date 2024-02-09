import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

/* eslint-disable react/display-name */
const withAuth = WrappedComponent => props => {
	const { currentUser, loading } = useContext(AuthContext);
	if (currentUser || loading) return;

	return <WrappedComponent {...props} />;
};

export default withAuth;
