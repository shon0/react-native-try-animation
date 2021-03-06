import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  InteractionManager,
} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  const LottieViewRef = React.useRef<LottieView>(null);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const interPolateSize = animatedValue.interpolate({
    inputRange: [0, 50, 100, 150],
    outputRange: [28, 32, 32, 28],
  });

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 150,
      useNativeDriver: false,
    }).start(() =>
      Animated.timing(animatedValue, {
        toValue: 0,
        useNativeDriver: false,
      }).reset(),
    );

    InteractionManager.runAfterInteractions(() => {
      LottieViewRef.current?.play();
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieWrapper}>
        <LottieView
          source={require('./lottie/monkey-see.json')}
          ref={LottieViewRef}
          loop={false}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={styles.button}>
            <Animated.Text style={{fontSize: interPolateSize}}>
              🍌
            </Animated.Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#B388FF'},
  lottieWrapper: {flex: 1},
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {fontSize: 32},
});

export default App;
