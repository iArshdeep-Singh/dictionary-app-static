import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    formData: {}
}


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateFormData(state, action) {

            state.formData = {...state.formData, ...action.payload}
        }
    }
})


export const {updateFormData} = loginSlice.actions
export default loginSlice.reducer