import _ from "lodash";

const InitialState = {
  // userEmail: false,
  // isSignUp: false,
  // isSignUpError: false,
  // isSignInError: false,
};

export const authReducer = (state = _.cloneDeep(InitialState), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
