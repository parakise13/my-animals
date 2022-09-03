import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "./animal-store";
import loginSlice from "./login-store";

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		// animal: animalSlice.reducer
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
