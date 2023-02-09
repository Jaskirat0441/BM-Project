const { createSlice } = require('@reduxjs/toolkit');

const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        showModal(state, action) {
           return true
        },
        hideModal(state, action) {
           return false
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
