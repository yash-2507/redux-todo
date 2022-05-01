import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080/todo";
const initialState = {
    todoArr: [],
    isLoading: true,
};

export const getItems = createAsyncThunk("getItems", async (name, thunkAPI) => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("something went wrong");
    }
});

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoArr = [action.payload, ...state.todoArr];
        },
        deleteTodo: (state, action) => {
            const itemTitle = action.payload;
            state.todoArr = state.todoArr.filter(
                (item) => item.title !== itemTitle
            );
        },
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.todoArr = action.payload;
        },
        [getItems.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        },
    },
});

export const { deleteTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
