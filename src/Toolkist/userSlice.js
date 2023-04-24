import { createSlice } from '@reduxjs/toolkit'
import { localUserServ } from '../service/localService';


const initialState = {
    // * khởi tạo state ban đầu , (tạm thời để dữ liệu thử để test chức năng -> sau này có login sẽ xóa) ; 
    userInfo: localUserServ.get(),
    // {
    //     hoTen : 'Tran Duy'
    // } , 
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // * bên trong object reducers của slice sẽ liệt kê ra các action cần thiết 
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setLoginUser: (state, action) => {
            state.userInfo = action.payload;
        },
    }
});
// TODO: sau khi tạo ra các action -> bóc tách các action tại đây 
export const { setUserInfo, setLoginUser } = userSlice.actions

export default userSlice.reducer