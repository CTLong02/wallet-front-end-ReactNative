import {
    StyledView,
    StyledText,
    StyledTouchableWithoutFeedback,
    StyledImage,
} from '../../../general/components/ComponentsApp';
function Service() {
    return (
        <StyledView className="bg-white shadow-lg rounded-lg p-3">
            <StyledText className="text-cyan-700 text-lg font-semibold">Dịch vụ</StyledText>
            <StyledView className="mt-2 flex flex-row justify-between flex-wrap">
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/transferMoney.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Chuyển nhận tiền</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/payBills.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Thanh toán hóa đơn</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/mobile.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Nạp tiền điện thoại</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/cart.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Thương mại điện tử</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/cardTravel.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Nạp tiền đối tác</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/insurance.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Tài chính bảo hiểm</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/borrow.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Vay tín dụng</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/pig.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Tiết kiệm</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/entertainment.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Giải trí</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="basis-1/5 flex flex-col items-center">
                        <StyledView
                            className="w-14 h-14 flex flex-row justify-center items-center rounded-lg"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../../assets/icon/heart.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="py-1 text-xs font-medium text-center">Đặt hẹn hò</StyledText>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
            </StyledView>
        </StyledView>
    );
}

export default Service;
