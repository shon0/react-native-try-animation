import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  const ref = React.useRef<LottieView>(null);
  const startAnimation = () => {
    ref.current?.play();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieWrapper}>
        <LottieView
          source={require('./lottie/monkey-see.json')}
          ref={ref}
          loop={false}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={startAnimation} style={styles.button}>
          <Text style={styles.buttonText}>🍌</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fffa88',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {fontSize: 32},
});

export default App;
