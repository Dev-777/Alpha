import { takeLatest, all } from "redux-saga/effects";

function* workerSignUp({ payload }) {}

function* watchSignUp() {
  yield takeLatest("aciton catch", workerSignUp);
}

// function* workerSignIn({ payload }) {
//   const { email, password } = payload;
//   try {
//     const res = yield fire.auth().signInWithEmailAndPassword(email, password);
//     yield put(signInAction(res));
//   } catch (error) {
//     yield put(signInErrorAction());
//   }
// }
//
// function* watchSignIn() {
//   yield takeLatest(SIGN_IN_SAGA, workerSignIn);
// }

export function* authSaga() {
  yield all([watchSignUp(), "watchSignIn()"]);
}
