import {ISuperheroList} from "../../interfaces/superheroListInterface";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {superheroService} from "../../services/superheroService";
import {AxiosError} from "axios";

const initialState : ISuperheroList = {
    page: 1,
    limit: 5,
    totalPages: null,
    totalItems: null,
    superheroes: []
}

const getAll = createAsyncThunk<ISuperheroList, {page:string}>(
    'superheroListSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await superheroService.getAll(page)
            return data
        } catch (error){
            const err = error as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const superheroListSlice = createSlice({
    name:"superheroListSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addMatcher(isFulfilled(getAll), (state, action) => {
                state.superheroes = action.payload.superheroes
                state.totalPages = action.payload.totalPages
            })
})

const {reducer: superheroListReducer, actions} = superheroListSlice;

const superheroListActions = {
    ...actions,
    getAll
}

export {
    superheroListReducer,
    superheroListActions
}