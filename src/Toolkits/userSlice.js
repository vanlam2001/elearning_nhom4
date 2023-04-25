import { createSlice } from '@reduxjs/toolkit'
import { localUserServ } from '../services/localService';


const initialState = {

    userInfo: localUserServ.get(),

}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setLoginUser: (state, action) => {
            console.log(action)
            state.userInfo = action.payload;
        },
    }
});
// TODO: sau khi tạo ra các action -> bóc tách các action tại đây 
export const { setUserInfo, setLoginUser } = userSlice.actions

export default userSlice.reducer