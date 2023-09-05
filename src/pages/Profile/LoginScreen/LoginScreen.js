import {useState} from 'react';

import AuthContent from '../../../component/Auth/AuthContent';
import LoadingOverlay from '../../../component/Auth/ui/LoadingOverlay';
import {login} from '../../../utils/auth.js';
import {Alert} from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        'Böyle bir kullanıcı bulunamadı',
        'Kullanıcı adınızı ve şifrenizi kontrol edip tekrar deneyin.',
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
