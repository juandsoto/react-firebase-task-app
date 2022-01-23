import { createContext, useContext, useState } from 'react';

interface Props {
	children: JSX.Element | JSX.Element[];
}

interface IContext {
	user: any;
	setUser: React.Dispatch<React.SetStateAction<any>>;
}

const initialState: IContext = {
	user: null,
	setUser: () => null
};

const AuthContext = createContext<IContext>(initialState);

export const AuthProvider = ({ children }: Props) => {
	return (
		<AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
