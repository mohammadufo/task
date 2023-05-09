import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: localStorage.getItem('darkmode') === 'true' ? true : false || false,
}

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    lightMode: (state) => {
      state.darkMode = false
      localStorage.removeItem('darkmode')
    },
    darkMode: (state) => {
      state.darkMode = true
      localStorage.setItem('darkmode', 'true')
    },
  },
})

export const { lightMode, darkMode } = themeSlice.actions
export default themeSlice.reducer
