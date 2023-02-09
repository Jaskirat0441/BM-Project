const { createSlice } = require('@reduxjs/toolkit');

const alertSlice = createSlice({
    name: 'alert',
    initialState: false,
    reducers: {
        showAlert(state, action) {
           return true
        },
        removeAlert(state, action) {
           return false
        },
    },
});

export const { showAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
