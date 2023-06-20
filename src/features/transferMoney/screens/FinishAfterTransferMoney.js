import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StyledView, StyledText, StyledImage, StyledTouchableOpacity } from '../../../general/components/ComponentsApp';
import { handleMoneyToString } from '../../../general/utils/handleString';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
function FinishAfterTransferMoney() {
    const navigation = useNavigation();
    const transaction = useSelector((state) => state.app.transactionInfor);
    const [sMoney, setSMoney] = useState('');
    const [sDate, setSDate] = useState('');
    useEffect(() => {
        if (transaction) {
            setSMoney(handleMoneyToString(transaction.money));
            setSDate(new Date(transaction.time).toLocaleString('vn'));
        }
    }, [transaction]);
    // console.log(transaction);
    return (
        <StyledView className="flex flex-col justify-between h-full">
            <StyledView>
                <StyledView className="bg-cyan-800 pt-2 pb-10 rounded-b-xl">
                    <StyledTouchableOpacity>
                        <StyledImage source={require('../../../assets/icon/left.png')}></StyledImage>
                    </StyledTouchableOpacity>
                </StyledView>
                <StyledView className="relative bottom-7 mx-6 shadow-lg bg-white p-3 rounded-lg">
                    <StyledText className="text-center text-xl font-medium text-black">Giao dịch thành công</StyledText>
                    <StyledText className="text-center text-lg font-medium text-black">{sMoney}</StyledText>
                    <StyledView className="flex flex-row justify-between my-3">
                        <StyledText className="text-base">Thời gian thanh toán </StyledText>
                        <StyledText className="text-base text-black font-medium">{sDate}</StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-between my-3">
                        <StyledText className="text-base">Mã giao dịch</StyledText>
                        <StyledText className="text-base text-black font-medium">821736483</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className="flex flex-row justify-around bg-white py-3 shadow-md">
                <StyledView>
                    <StyledTouchableOpacity
                        onPress={() => navigation.navigate({ name: NavigationScreenNames.Dashboard })}
                    >
                        <StyledText
                            className="text-lg font-medium text-cyan-800 px-3 py-2 rounded-md border-solid border-cyan-800"
                            style={{ borderWidth: 1 }}
                        >
                            Về trang chủ
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
                <StyledView>
                    <StyledTouchableOpacity
                        onPress={() => navigation.navigate({ name: NavigationScreenNames.TransferByWallet })}
                    >
                        <StyledText
                            className="text-lg font-medium text-white px-3 py-2 rounded-md border-solid border-cyan-800 bg-cyan-800"
                            style={{ borderWidth: 1 }}
                        >
                            Chuyển tiền tiếp
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

export default FinishAfterTransferMoney;
