import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app/app.slice";
import tasksReducer from "./task/task.slice";
import userReducer from "./user/user.slice";

const reducers = combineReducers({
	app: appReducer,
	entities: combineReducers({
		tasks: tasksReducer,
		users: userReducer,
	}),
});

const persistConfig = {
	key: "root",
	storage,
	tasksReducer,
	stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [logger, thunk],
});

export const persistor = persistStore(store);
