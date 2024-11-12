import {ISuperhero} from "../../interfaces/superheroInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {superheroService} from "../../services/superheroService";
import { AxiosError} from "axios";

interface IState {
    superheroDetails: ISuperhero,
    heroForUpdate: boolean
}

const initialState: IState = {
    superheroDetails: {
        _id: '',
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: []
    },
    heroForUpdate: false

}

const byId = createAsyncThunk<ISuperhero, { _id: string }>(
    'superheroInfoSlice/byId',
    async ({_id}, {rejectWithValue}) => {
        try {
            const {data} = await superheroService.byId(_id);
            return data
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err as AxiosError);
        }
    }
)

const superheroInfoSlice = createSlice({
    name: "superheroInfoSlice",
    initialState,
    reducers: {
        heroForUpdate: (state,action) =>{
                state.heroForUpdate = action.payload;
            }
    },
    extraReducers: builder =>
        builder
            .addCase(byId.fulfilled, (state, action) => {
                state.superheroDetails = action.payload
            })
})

const {reducer: superheroInfoReducer, actions} = superheroInfoSlice;

const superheroInfoActions = {
    ...actions,
    byId
}

export {
    superheroInfoActions,
    superheroInfoReducer
}