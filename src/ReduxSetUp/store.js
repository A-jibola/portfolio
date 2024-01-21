import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const openerSlice = createSlice({
    name: "opener",
    initialState : {
        value: false
    },
    reducers:{
        openDoor: (state)=>{
            state.value = true;
        }
    }
})

const reducer = combineReducers({
    opener: openerSlice.reducer
})

export const store = configureStore({
    reducer: persistReducer(persistConfig, reducer)
})

export const {openDoor} = openerSlice.actions