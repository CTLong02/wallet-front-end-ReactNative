import AxiosClient from './AxiosClient';
const ServiceApi = {
    getNameByPhone: (params) => {
        const url = 'service/fullname';
        return AxiosClient.post(url, params);
    },
    transferMoney: (params) => {
        const url = 'service/transfer-money';
        return AxiosClient.post(url, params);
    },
};

export default ServiceApi;
