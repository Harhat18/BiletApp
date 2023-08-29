import React from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native';

function Loading() {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          style={{width: 200, height: 200}}
          source={require('../../assets/loading.json')}
          autoPlay
          loop
        />
      </SafeAreaView>
    </>
  );
}

export default Loading;
