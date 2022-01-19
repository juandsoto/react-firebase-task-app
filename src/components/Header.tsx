import styles from '../styles/Header.module.css';
import logo from '../assets/logo.svg';
import profile from '../assets/profile.jpeg';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<div className={styles.img}>
					<img src={logo} alt='logo' />
				</div>
				<h1>To-do app</h1>
			</div>
			<div className={styles.profile}>
				<img src={profile} alt='profile image' />
			</div>
		</header>
	);
};

export default Header;
