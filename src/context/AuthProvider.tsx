import React, { createContext, useContext, useState } from 'react';
import User from '../interfaces/user.interface';

interface Props {
	children: JSX.Element | JSX.Element[];
}

interface IContext {
	user: User;
	setUser: (user: User) => void;
}

const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User>();
	return (
		<AuthContext.Provider value={{ user: user!, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
