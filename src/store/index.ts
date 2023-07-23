import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import customerSlice from "./slices/customer.slice";
import supportUsersSlice from "./slices/support-users-slice";
import chatSlice from "./slices/chat-messages-slice";
import userSlice from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    support_users: supportUsersSlice,
    customers: customerSlice,
    chats: chatSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
