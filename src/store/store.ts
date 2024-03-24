
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "../services/app.service";

export const store = configureStore({
	reducer: combineReducers({
	  [serviceApi.reducerPath]: serviceApi.reducer,
	}),
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: false,
	  })
		.concat([])
		.concat(serviceApi.middleware),
  });
  export type RootState = ReturnType<typeof store.getState>