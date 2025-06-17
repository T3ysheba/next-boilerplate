import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
})

export const {} = GlobalSlice.actions

const globalSliceReducer = GlobalSlice.reducer

export default globalSliceReducer
