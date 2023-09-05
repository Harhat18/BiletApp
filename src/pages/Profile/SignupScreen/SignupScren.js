import {useState} from 'react';

import AuthContent from '../../../component/Auth/AuthContent';
import LoadingOverlay from '../../../component/Auth/ui/LoadingOverlay';
import {createUser} from '../../../utils/auth.js';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Kullanıcı Oluşturuluyor.." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
