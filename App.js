import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class App extends React.Component {
  state = {
    fadeAnimation: new Animated.Value(0),
    xValue: new Animated.Value(0),
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
  moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.animatedView,
            {alignSelf: 'center'},
            {opacity: this.state.fadeAnimation},
          ]}
        />
        <TouchableOpacity style={styles.btn} onPress={this.fadeIn}>
          <Text style={styles.btnText}>Animation</Text>
        </TouchableOpacity>
        <Animated.View
          style={[styles.animatedView, {left: this.state.xValue}]}
        />
        <TouchableOpacity style={styles.btn} onPress={this.moveAnimation}>
          <Text style={styles.btnText}>Left Animate</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    alignSelf: 'center',
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
