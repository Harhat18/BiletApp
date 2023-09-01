import {useState} from 'react';

import AuthContent from '../../../component/Auth/AuthContent';
import LoadingOverlay from '../../../component/Auth/ui/LoadingOverlay';
import {login} from '../../../utils/auth.js';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
