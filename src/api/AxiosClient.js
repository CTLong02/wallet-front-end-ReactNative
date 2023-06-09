import queryString from 'query-string';
import axios from 'axios';
import AppCofig from '../general/contants/AppCofig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toasts from '../app/components/Toasts';

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
        // console.log({ response });
        if (response && response.data) {
            const data = response.data;
            const { result, reason, detail } = data;
            console.log('data', data);
            if (result === 'fail') {
                if (reason) {
                    errMessage = reason;
                } else if (detail) {
                    errMessage = detail;
                }
            }
            if (errMessage) {
                console.log('errMessage', errMessage);
                Toasts.showError(errMessage);
            }
        }
        // throw err;
    },
);

const updateAccessToken = (accessToken) => {
    AxiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
(() => {
    AsyncStorage.getItem('access_Token')
        .then((value) => {
            updateAccessToken(value.toString());
            console.log(Date.now(), 'accessToeken--', value);
        })
        .catch((err) => console.log(err));
})();
export { updateAccessToken };
export default AxiosClient;
