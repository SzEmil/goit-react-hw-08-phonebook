export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserToken = state => state.auth.token;
