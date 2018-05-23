import signupSaga from '../containers/SignupContainer/sagas'
import loginSaga from '../containers/LoginContainer/sagas'

export default function* IndexSaga () {  
    yield [
      signupSaga(),
      loginSaga(),
    ]
  }