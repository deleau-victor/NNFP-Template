import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHelloState } from '@/store/types/hello'

const initialState: IHelloState = {
	message: 'Hello World!',
}

export const helloSlice = createSlice({
	name: 'hello',
	initialState: initialState,
	reducers: {
		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload
			return state
		},
	},
})

const { actions, reducer } = helloSlice

export const { setMessage } = actions

export default reducer
