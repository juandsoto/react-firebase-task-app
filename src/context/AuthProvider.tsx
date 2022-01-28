import React, { createContext, useContext, useState } from 'react';
import User from '../interfaces/user.interface';

interface Props {
	children: JSX.Element | JSX.Element[];
}

interface IContext {
	user: User;
	setUser: (user: User | null) => void;
}

const AuthContext = createContext<IContext>({} as IContext);

const DEFAULT_USER = {
	uid: '4Z7FWC95AEamoYurPyMvWqEmAZe2',
	email: 'juandsoto1006@gmail.com',
	emailVerified: true,
	displayName: 'Juan David Soto Carmona',
	isAnonymous: false,
	photoURL:
		'https://lh3.googleusercontent.com/a-/AOh14GjQenYGlUOSrBG_YqcTsLk3PygDnv7O8a7KwUo4=s96-c',
	providerData: [
		{
			providerId: 'google.com',
			uid: '101352879737598524053',
			displayName: 'Juan David Soto Carmona',
			email: 'juandsoto1006@gmail.com',
			phoneNumber: null,
			photoURL:
				'https://lh3.googleusercontent.com/a-/AOh14GjQenYGlUOSrBG_YqcTsLk3PygDnv7O8a7KwUo4=s96-c'
		}
	],
	stsTokenManager: {
		refreshToken:
			'AFxQ4_oVfIci9cWn9U95N2OaYD2Hd_SMss-UOIUsoxkYtJjF4pKqjCPJkZer2XxBzQ4Q_CTebDcjufs6JXskcjUGQmS9QkicZXDcyh1s8q7r9L9O-zi4ddnp1u8YmM5Mtn3K6qE9fpHJMaBrA6-9obhdxni9EPODvdixIIoCU3vXE7GB2K0gjvV_Wc5FqDkWaGB6zwKMLtafh52-RfCKolt7V8ivmSuJeqNxgrSjOiClZSfDMLdJ9R029j-1qIvKxOoA9X891FeGvpGu-5IJ7mQVK_s2aRlARuGU1caLsfSBb_n8dbCFE3d3-XppgzeSfLxHxa4MRleFaCmHj0GjAlgw36O8jqUw6GuWz6_BTpFW6rIAEYY2EgSnmfKMvNnWoL68G-dh-AvLAitYuU187xxLiBh7jAhpO4jxZCLytUrsbKgnUsF0k0zcGdkZZwn1s0jl924XHjtK',
		accessToken:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSnVhbiBEYXZpZCBTb3RvIENhcm1vbmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pRZW5ZR2xVT1NyQkdfWXFjVHNMazNQeWdEbnY3TzhhN0t3VW80PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Rhc2stZGVtby1hNTM2ZSIsImF1ZCI6InRhc2stZGVtby1hNTM2ZSIsImF1dGhfdGltZSI6MTY0Mjk4MTMzMCwidXNlcl9pZCI6IjRaN0ZXQzk1QUVhbW9ZdXJQeU12V3FFbUFaZTIiLCJzdWIiOiI0WjdGV0M5NUFFYW1vWXVyUHlNdldxRW1BWmUyIiwiaWF0IjoxNjQyOTgxMzMwLCJleHAiOjE2NDI5ODQ5MzAsImVtYWlsIjoianVhbmRzb3RvMTAwNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTM1Mjg3OTczNzU5ODUyNDA1MyJdLCJlbWFpbCI6WyJqdWFuZHNvdG8xMDA2QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.V2zntcIjnPT40PqByM5klbuGdPmbYgBgRY_tHgSHxau-WcV9ZOLWA3aBMCUlmFwrRfTSxzpasSuYMD0LzSkc81CHO_4RGeodPexBp8nEVUOgMJJLXVYmOS4QLrIU0bjv_g78z1XjIzLmqZO9WJ9jD-LMUhqTk6mecBBjtOh8JTeI7p1nwS7Rv955EznsLeOiN6lvx4ASJp8So2VsWy47rII1em_KBumrPjidiQbAakum2xRNV8V5vtWslPGpWmSlfsNPuLK-k3Ic18rk_oMpeTh-8DTGMTqLFjKlSRFyCRGWTrJpm-sa1YoFc2MgQWZ6_d2ZSxIKe0ax_bbQ1e3Pxw',
		expirationTime: 1642984947139
	},
	createdAt: '1642968269313',
	lastLoginAt: '1642981254049',
	apiKey: 'AIzaSyDr7nBPDiLMEs1yuK5-Ox9uMe21iFiR070',
	appName: '[DEFAULT]'
};

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>();
	return (
		<AuthContext.Provider value={{ user: user!, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
