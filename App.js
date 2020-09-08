import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  state = {
    fadeAnimation: new Animated.Value(0),
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      this.fadeOut();
    });
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[styles.animatedView, {opacity: this.state.fadeAnimation}]}
        />
        <TouchableOpacity style={styles.btn} onPress={this.fadeIn}>
          <Text style={styles.btnText}>Animations</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  btn: {
    backgroundColor: 'skyblue',
    height: 45,
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 15,
    padding: 12,
  },
});

export default App;
