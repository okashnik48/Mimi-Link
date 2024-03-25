
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "../services/app.service";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StatisticsReducer } from "./slices/statistics";

export const store = configureStore({
	reducer: combineReducers({
	  [serviceApi.reducerPath]: serviceApi.reducer,
	  StatisticsReducer
	}),
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: false,
	  })
		.concat([])
		.concat(serviceApi.middleware),
  });
  export type RootState = ReturnType<typeof store.getState>
  type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector