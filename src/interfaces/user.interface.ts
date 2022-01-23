export default interface User {
	uid: string;
	email: string;
	emailVerified: boolean;
	displayName: string;
	isAnonymous: boolean;
	photoURL: string;
	providerData: ProviderDatum[];
	stsTokenManager: StsTokenManager;
	createdAt: string;
	lastLoginAt: string;
	apiKey: string;
	appName: string;
}

interface ProviderDatum {
	providerId: string;
	uid: string;
	displayName: string;
	email: string;
	phoneNumber: null;
	photoURL: string;
}

interface StsTokenManager {
	refreshToken: string;
	accessToken: string;
	expirationTime: number;
}
