import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    inData: {}
}


const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        inputData: (state, action) => {
            state.inData = {...state.inData, ...action.payload}
        }
    }
})


export const {inputData} = signupSlice.actions
export default signupSlice.reducer