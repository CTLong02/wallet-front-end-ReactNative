import { View, Text } from 'react-native';
import styles from '../../../general/Styles/AppStyles';
function Promotion() {
    return (
        <View style={[styles.bgWhite, styles.shawDowLg, styles.p3, styles.roundedMd]}>
            <Text style={[styles.fw600, styles.textLg, styles.textGreenMain]}>Ưu dãi</Text>
        </View>
    );
}

export default Promotion;
