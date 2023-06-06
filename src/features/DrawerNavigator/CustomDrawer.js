import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    StyledText,
    StyledView,
    StyledScrollView,
    StyledImage,
    StyledTouchableWithoutFeedback,
} from '../../general/components/ComponentsApp';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../app/appSlice';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import AppCofig from '../../general/contants/AppCofig';

function CustomDrawer() {
    const account = useSelector((state) => state.app.account);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
        navigation.navigate({ name: NavigationScreenNames.Login });
    };
    // console.log(account?.avatar ? `${AppCofig.URL}${account.avatar}` : '');
    return (
        <DrawerContentScrollView style={{ margin: 0, padding: 0, position: 'relative', top: -10 }}>
            <StyledScrollView>
                <StyledView className="flex flex-col justify-start p-4 h-screen" style={{ backgroundColor: '#327480' }}>
                    <StyledView>
                        <StyledView className="flex flex-row items-center">
                            <StyledView className="mr-3">
                                <StyledTouchableWithoutFeedback>
                                    <StyledImage
                                        className="w-14 h-14 rounded-full"
                                        source={
                                            account && account.avatar
                                                ? { uri: `${AppCofig.URL}${account.avatar}` }
                                                : require('../../assets/icon/user.png')
                                        }
                                    ></StyledImage>
                                </StyledTouchableWithoutFeedback>
                            </StyledView>
                            <StyledView>
                                <StyledText className="text-white text-base font-medium">
                                    {account?.fullname}
                                </StyledText>
                                <StyledText className="text-white text-base font-medium">
                                    {account?.phoneNumbers}
                                </StyledText>
                            </StyledView>
                        </StyledView>
                        <StyledTouchableWithoutFeedback>
                            <StyledView className="my-4 flex flex-row items-center">
                                <StyledView
                                    className="w-14 h-14 flex flex-row items-center justify-center rounded-md mr-4"
                                    style={{ backgroundColor: '#83B8C1' }}
                                >
                                    <StyledImage
                                        className="w-10 h-10"
                                        source={require('../../assets/icon/setting.png')}
                                    ></StyledImage>
                                </StyledView>
                                <StyledView className="w-44">
                                    <StyledText className="text-white text-lg font-medium">Cài đặt ứng dụng</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledTouchableWithoutFeedback>
                        <StyledTouchableWithoutFeedback>
                            <StyledView className="my-4 flex flex-row items-center">
                                <StyledView
                                    className="w-14 h-14 flex flex-row items-center justify-center rounded-md mr-4"
                                    style={{ backgroundColor: '#83B8C1' }}
                                >
                                    <StyledImage
                                        className="w-10 h-10"
                                        source={require('../../assets/icon/inforSoftware.png')}
                                    ></StyledImage>
                                </StyledView>
                                <StyledView className="w-44">
                                    <StyledText className="text-white text-lg font-medium">
                                        Thông tin phần mềm
                                    </StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledTouchableWithoutFeedback>
                        <StyledTouchableWithoutFeedback>
                            <StyledView className="my-4 flex flex-row items-center ">
                                <StyledView
                                    className="w-14 h-14 flex flex-row items-center justify-center rounded-md mr-4"
                                    style={{ backgroundColor: '#83B8C1' }}
                                >
                                    <StyledImage
                                        className="w-10 h-10"
                                        source={require('../../assets/icon/ruleAndAgree.png')}
                                    ></StyledImage>
                                </StyledView>
                                <StyledView className="w-44">
                                    <StyledText className="text-white text-lg font-medium break-words">
                                        Các điều khoản và thỏa thuận
                                    </StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledTouchableWithoutFeedback>
                        <StyledTouchableWithoutFeedback>
                            <StyledView className="my-4 flex flex-row items-center">
                                <StyledView
                                    className="w-14 h-14 flex flex-row items-center justify-center rounded-md mr-4"
                                    style={{ backgroundColor: '#83B8C1' }}
                                >
                                    <StyledImage
                                        className="w-10 h-10"
                                        source={require('../../assets/icon/help.png')}
                                    ></StyledImage>
                                </StyledView>
                                <StyledView className="w-44">
                                    <StyledText className="text-white text-lg font-medium">
                                        Trung tâm trợ giúp
                                    </StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledTouchableWithoutFeedback>
                    </StyledView>
                    <StyledView className="absolute bottom-20 right-4 left-4 box-content">
                        <StyledTouchableWithoutFeedback onPress={handleSignOut}>
                            <StyledView className="px-3 py-2 bg-white rounded-lg">
                                <StyledText className="text-lg text-cyan-700 font-semibold text-center">
                                    Đăng xuất
                                </StyledText>
                            </StyledView>
                        </StyledTouchableWithoutFeedback>
                    </StyledView>
                </StyledView>
            </StyledScrollView>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;
