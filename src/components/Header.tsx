import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.svg';
import { useAuth } from '../context/AuthProvider';
import User from '../interfaces/user.interface';

interface Props {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
	const { user, setUser } = useAuth();

	const { darkMode, setDarkMode } = props;
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<div className={styles.img}>
					<img src={logo} alt='logo' />
				</div>
				<h1>To-do app</h1>
			</div>
			<div className={styles.wrapper}>
				<button
					onClick={() => setDarkMode(prev => !prev)}
					className={styles.themeMode}
				>
					{darkMode ? (
						<LightModeIcon htmlColor='#f6c90e' fontSize='medium' />
					) : (
						<DarkModeIcon fontSize='medium' />
					)}
				</button>
				{user && (
					<div
						className={styles.profile}
						onClick={() => setIsProfileOpen(prev => !prev)}
					>
						<img src={user?.photoURL || ''} alt='profile image' />
						{isProfileOpen && (
							<div className={styles.profileInfo}>
								<p>{user?.displayName}</p>
								<p>{user?.email}</p>
								<button className={styles.logout} onClick={() => setUser(null)}>
									Logout
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
