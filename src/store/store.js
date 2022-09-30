import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app/app.slice";
import tasksReducer from "./task/task.slice";

const reducers = combineReducers({
	app: appReducer,
	entities: combineReducers({
		tasks: tasksReducer,
	}),
});

const persistConfig = {
	key: "root",
	storage,
	tasksReducer,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [logger],
});

export const persistor = persistStore(store);
