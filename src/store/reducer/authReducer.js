const InitialState = {
  userEmail: false,
  isSignUp: false,
  isSignUpError: false,
  isSignInError: false,
};

export const authReducer = (
  state = JSON.parse(JSON.stringify(InitialState)),
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
