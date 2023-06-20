import Toast from 'react-native-toast-message';
const Toasts = {
    showSuccess: (message) => {
        Toast.show({
            type: 'success',
            text1: message,
            autoHide: true,
            position: 'top',
            visibilityTime: 4000,
        });
    },
    showError: (message) => {
        Toast.show({
            type: 'error',
            text1: message,
            autoHide: true,
            position: 'top',
            visibilityTime: 4000,
        });
    },
};

export default Toasts;
