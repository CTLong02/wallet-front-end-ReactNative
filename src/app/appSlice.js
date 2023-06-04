import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isHasAccessToken = false;
AsyncStorage.getItem('access_Token')
    .then((value) => {
        isHasAccessToken = true;
    })
    .catch((err) => {
        console.log(err);
    });

const initialState = {
    isLogin: isHasAccessToken,
    account: undefined,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.account = { ...action.payload };
            AsyncStorage.setItem('access_Token', action.payload.accessToken);
        },
        signOut: (state) => {
            state.account = undefined;
            AsyncStorage.removeItem('access_Token');
        },
    },
});

const { reducer, actions } = appSlice;
export const { signIn, signOut } = actions;
export default reducer;
