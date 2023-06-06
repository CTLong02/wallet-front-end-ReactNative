import { useEffect, useState } from 'react';
import { StyledView, StyledImage, StyledText } from '../../../general/components/ComponentsApp';
function Card({ bankname, expireDate, numberOfCCard }) {
    const [image, setImage] = useState();
    const [logo, setLogo] = useState();
    const [stringNCard, setStringNCard] = useState();
    const [sDate, setSSDate] = useState();
    useEffect(() => {
        if (bankname.toLowerCase() === 'vpbank') {
            setImage(
                <StyledImage
                    className="w-full rounded-xl"
                    source={require(`../../../assets/img/bg_vpbank.png`)}
                ></StyledImage>,
            );
            setLogo(
                <StyledImage
                    className="absolute top-5 left-5"
                    source={require('../../../assets/img/logo_vpbank.png')}
                ></StyledImage>,
            );
        } else if (bankname.toLowerCase() === 'acbbank') {
            setImage(
                <StyledImage
                    className="w-full rounded-xl"
                    source={require(`../../../assets/img/bg_acbbank.png`)}
                ></StyledImage>,
            );
            setLogo(
                <StyledImage
                    className="absolute top-5 left-5"
                    source={require('../../../assets/img/logo_acbbank.png')}
                ></StyledImage>,
            );
        } else if (bankname.toLowerCase() === 'techcombank') {
            setImage(
                <StyledImage
                    className="w-full rounded-xl"
                    source={require(`../../../assets/img/bg_techcombank.png`)}
                ></StyledImage>,
            );
            setLogo(
                <StyledImage
                    className="absolute top-5 left-5"
                    source={require('../../../assets/img/logo_techcombank.png')}
                ></StyledImage>,
            );
        }
    }, []);
    useEffect(() => {
        setSSDate(expireDate.toString().slice(0, 7).replace('-', '/'));
        setStringNCard('**** **** **** '.concat(numberOfCCard.toString().slice(-5, -1)));
    }, []);
    console.log(`../../../assets/img/${image}`);
    return (
        <StyledView className="mt-6">
            <StyledView className="relative">
                {image ? image : <></>}
                {logo ? logo : <></>}
                <StyledView className="absolute bottom-5 left-5">
                    <StyledText className="text-xl text-white font-semibold">
                        {stringNCard ? stringNCard : ''}
                    </StyledText>
                    <StyledText className="text-xl text-white font-semibold">
                        Expiry Date: {sDate ? sDate : ''}
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

export default Card;
