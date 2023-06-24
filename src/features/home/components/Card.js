import { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../../general/Styles/AppStyles';
function Card({ bankname, expireDate, numberOfCCard }) {
    const [image, setImage] = useState();
    const [logo, setLogo] = useState();
    const [stringNCard, setStringNCard] = useState();
    const [sDate, setSSDate] = useState();
    useEffect(() => {
        if (bankname.toLowerCase() === 'vpbank') {
            setImage(
                <Image
                    style={[styles.wFull, styles.roundedLg]}
                    source={require(`../../../assets/img/bg_vpbank.png`)}
                ></Image>,
            );
            setLogo(
                <Image
                    style={{ position: 'absolute', left: 20, top: 20 }}
                    source={require('../../../assets/img/logo_vpbank.png')}
                ></Image>,
            );
        } else if (bankname.toLowerCase() === 'acbbank') {
            setImage(
                <Image
                    style={[styles.wFull, styles.roundedLg]}
                    source={require(`../../../assets/img/bg_acbbank.png`)}
                ></Image>,
            );
            setLogo(
                <Image
                    style={{ position: 'absolute', left: 20, top: 20 }}
                    source={require('../../../assets/img/logo_acbbank.png')}
                ></Image>,
            );
        } else if (bankname.toLowerCase() === 'techcombank') {
            setImage(
                <Image
                    style={[styles.wFull, styles.roundedLg]}
                    source={require(`../../../assets/img/bg_techcombank.png`)}
                ></Image>,
            );
            setLogo(
                <Image
                    style={{ position: 'absolute', left: 20, top: 20 }}
                    source={require('../../../assets/img/logo_techcombank.png')}
                ></Image>,
            );
        }
    }, []);
    useEffect(() => {
        setSSDate(expireDate.toString().slice(0, 7).replace('-', '/'));
        setStringNCard('**** **** **** '.concat(numberOfCCard.toString().slice(-5, -1)));
    }, []);
    // console.log(`../../../assets/img/${image}`);
    return (
        <View style={styles.mt3}>
            <View style={{ position: 'relative' }}>
                {image ? image : <></>}
                {logo ? logo : <></>}
                <View style={{ position: 'absolute', left: 20, bottom: 20 }}>
                    <Text style={[styles.textLg, styles.textWhite, styles.fw500]}>
                        {stringNCard ? stringNCard : ''}
                    </Text>
                    <Text style={[styles.textLg, styles.textWhite, styles.fw500]}>
                        Expiry Date: {sDate ? sDate : ''}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Card;
