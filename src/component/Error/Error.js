import React from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native';

function Error() {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          style={{width: 200, height: 200}}
          source={require('../../assets/error.json')}
          autoPlay
          loop
        />
      </SafeAreaView>
    </>
  );
}

export default Error;
