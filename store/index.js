export const getters = {
    isAuthenticated(state) {
      console.log('isAuthenticated:', state.auth.loggedIn);
      return state.auth.loggedIn;
    },
  
    loggedInUser(state) {
      console.log("loggedInUser:", state.auth.user);
      return state.auth.user;
    },
  };