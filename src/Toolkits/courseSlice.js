import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listCourse: [],
}
const courseSlice = createSlice({
    name: 'courseSlice',
    initialState,
    reducers: {
        setListCourse: (state, action) => {
            state.listCourse = action.payload
        },
    }
});
export const { setListCourse } = courseSlice.actions
export default courseSlice.reducer