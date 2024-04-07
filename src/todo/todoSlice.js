import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            return [action.payload,...state] ;
        },
        removeTodo(state,action){
            return state.filter(item => item.id !== action.payload)
        },
        clean(state,action){
            return []
        }
        
        
    }
});

export const { addTodo,removeTodo,clean } = todoSlice.actions;
export default todoSlice.reducer;
