const { createSlice } = require('@reduxjs/toolkit');

const billSlice = createSlice({
    name: 'bills',
    initialState: [{
        "id": 1,
        "desc": "Dominoes",
        "category": "FoodNDining",
        "amount": "430",
        "date": "01-02-2020"
        },
        {
        "id": 2,
        "desc": "Car wash",
        "category": "utility",
        "amount": "500",
        "date": "01-06-2020"
        },
        {
        "id": 3,
        "desc": "Amazon",
        "category": "shopping",
        "amount": "2030",
        "date": "01-07-2020"
        },
        {
        "id": 4,
        "desc": "House rent",
        "category": "Food & Dining",
        "amount": "35900",
        "date": "01-03-2020"
        },
        {
        "id": 5,
        "desc": "Tuition",
        "category": "education",
        "amount": "2200",
        "date": "01-12-2020"
        },
        {
        "id": 6,
        "desc": "Laundry",
        "category": "Personal Care",
        "amount": "320",
        "date": "01-14-2020"
        },
        {
        "id": 7,
        "desc": "Vacation",
        "category": "Travel",
        "amount": "3430",
        "date": "01-18-2020"
        }],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
         filterCategory(state, action) {

            if(action.payload !== "Category" || "category"){
                return state.filter((item) => (
                    item.category === action.payload  ));
                }
                else{
                    return state;
                }
        },
          },
});

export const { add, remove,filterCategory } = billSlice.actions;
export default billSlice.reducer;