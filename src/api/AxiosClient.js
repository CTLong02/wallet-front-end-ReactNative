import queryString from 'query-string';
import axios from 'axios';
import AppCofig from '../general/contants/AppCofig';

const sTag = '[AxiosClient]';

const AxiosClient = axios.create({
    baseURL: AppCofig.Base_URL,
    timeout: 30 * 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(async (config) => {
    return config;
});
AxiosClient.interceptors.response.use(
    (response) => {
        if (response.headers['session-token']) {
            axiosClient.defaults.headers.common['session-token'] = response.headers['session-token'];
        }

        if (response && response.data) {
            if (response.status === 201) {
                return { status: 201, ...response.data };
            }
            return response.data;
        }
        return response;
    },
    (err) => {
        console.log(`${sTag} ${err}`);
        let errMessage = null;
        const response = err.response;
        console.log({ response });
        if (response && response.data) {
            const data = response.data;
            const { result, reason, detail } = data;
            if (result === 'failed') {
                if (reason) {
                    errMessage = reason;
                } else if (detail) {
                    errMessage = detail;
                }
            }
            if (errMessage) {
            }
        }
        throw err;
    },
);

export default AxiosClient;
