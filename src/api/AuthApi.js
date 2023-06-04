import AxiosClient from './AxiosClient';

const AuthApi = {
    signIn: (params) => {
        const url = 'auth/signIn';
        return AxiosClient.post(url, params);
    },
    signUp: (params) => {
        const url = 'auth/signUp';
        return AxiosClient.post(url, params);
    },
};
export default AuthApi;
