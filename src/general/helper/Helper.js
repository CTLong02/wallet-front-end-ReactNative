import { Dimensions } from 'react-native';

const Helper = {
    deviceHeight: () => {
        return Dimensions.get('window').height;
    },
    deviceWidth: () => {
        return Dimensions.get('window').width;
    },
};

export default Helper;
