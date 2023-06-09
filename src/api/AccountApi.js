import AxiosClient from './AxiosClient';

const AccountApi = {
    createCard: (params) => {
        const url = 'account/create-card';
        return AxiosClient.post(url, params);
    },
};
export default AccountApi;
