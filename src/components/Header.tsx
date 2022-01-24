import { useState } from 'react';

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
						<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZ5JREFUSEvVVctVg1AQvZMFEXLgaAd2oC48ZGfSgR2oFQQrkFRg7CBWoB1IVspKrcAS1IchysLxPJBIXl4gxLiQFbzP3Dszdy6EP37oj+OjFkAcOiwJWa5Y+t7SB2XgtQGMQ8e3DDGgPbwUS7gIgO+x+Z44PdMVfbXkcxnI4AScMfBgGaKrgqgBZPA4cW4I2GWg33KFXzwzB5BdsAMC7eguqAA/hPjRMqKOSkjbg29WXs5mHNqHxOiBqJMCMAdMuGi50bX8XFRSuVfZ5HFoDwl0pJMzMw9b7eikTOqlAClz0BUDr8TwzaYYymCTD+cYhPOUYeOza+6/BYtASgHi0A4AOgDj1GqLwYyi7hwvA+GR5UZZ6TTPFCCXYHGQ8jXTEFtq82SfJonzrDtfXFsZYHK7sc0N42lpAF16ay2RDiBvciZNeGZTXMpXObUMpAP1qyZnGi+RqWZyK60iJat4S5YJvFRRWTojarCfy7PWoFV5i8qwyrtKzE7vLSpAlXdpB20Vu44TZ+pdRRKVXjQzvf/mj1bmjnX3apWobnB5/gvUFvoZj0NJ5AAAAABJRU5ErkJggg==' />
					) : (
						<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZhJREFUSEu1lYExBEEQRd9FgAgQASJABIgAESACRIAIkAERIAMiQATIQD3VczW3N7s7W267amvm6mb/7/79p3fCyDEZGZ8+gmXgEDgF3K8MTaiL4Ai4CmBxf7J9NU8bwV1kLtAbsAG8ADvVyHGwRHABnEfGVvENPC2KwAwFM3aB58h6YQQCbgOXgJUYNvcL+ADW/yPRGvAe0rhXmhSv0YdjwP5UR94Drahr7gG1z8Pft4BESpeTd5LlBKm5uTz5y0q0GhVYSVXkBEn/1NwmwGY0fWkISU5wDZwAZ4D7UuiyB0ASK7Lqxy7JShLdxGhok0BX2ei97IDVp7BS42+s5ATpDtTacT8SEdCK8vgEdOLcsEuNPAgpqhoZYAIqrWNlKnNzVCQ7SrQ1xI5hba3sUJzeo9IsSpfK1Uok6wvlEtz+zFzGEoGHbJqleqF0io0vhWcFlsCYM0jbuPZF9fRjY1iNlbj62FhN4epZZVFeLTwTfV80M9OSTZfkIH4nBC9K2UeQgMzUxrn6WIUyunbOpVqCvia3/j86wS+UkVUZlM9ZYAAAAABJRU5ErkJggg==' />
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
