import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { tableReduser } from "./slices/productSlice";

const rootReducer = combineReducers({
  [tableReduser.name]: tableReduser.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
