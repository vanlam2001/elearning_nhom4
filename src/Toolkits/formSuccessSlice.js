import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isModalVisible: false,
}

const formSuccesSlice = createSlice({
    name: "formSuccesSlice",
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            state.isModalVisible = true;
        },

        handleSuccess: (state, action) => {
            state.isModalVisible = false;
        },

        closeFormSuccess: (state, action) => {
            state.isModalVisible = false;
        }
    }
})
export const { registerSuccess, handleSuccess, closeFormSuccess } = formSuccesSlice.actions;

export default formSuccesSlice.reducer