import LoginWithPopUp from './components/login-with-popup/LoginWithPopUp';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<AuthProvider>
			<h1>Nucleo de la aplicación</h1>
			<Register />
			<Login />
			<Logout />
			<LoginWithPopUp />
		</AuthProvider>
	);
};

export default App;
