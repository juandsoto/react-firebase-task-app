import {
	GoogleAuthProvider,
	inMemoryPersistence,
	setPersistence,
	signInWithPopup
} from 'firebase/auth';

import styles from '../../styles/Login.module.css';
import logo from '../../assets/logo.svg';
import { auth, provider } from '../../config/firebase';
import { useAuth } from '../../context/AuthProvider';
import User from '../../interfaces/user.interface';

const Login = () => {
	const { setUser } = useAuth();

	const onSignIn = () => {
		// setPersistence(auth, inMemoryPersistence)
		// .then(() =>
		signInWithPopup(auth, provider)
			.then(result => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				console.log(result);
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential!.accessToken;
				setUser(result.user as User);
			})
			.catch(console.log);
		// )
		// .catch(console.log);
	};

	return (
		<section id='login'>
			<div className={styles.container}>
				<div className={styles.login}>
					<div className={styles.loginTop}>
						<div className={styles.logo}>
							<img src={logo} alt='logo' />
							<h1>To-do app</h1>
						</div>
					</div>
					<div className={styles.loginBottom}>
						<button onClick={onSignIn} className={styles.signIn}>
							sign in
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
