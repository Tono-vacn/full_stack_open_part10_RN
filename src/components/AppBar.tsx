import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    // ...
  },
  text: {
    color: '#ffffff',
  }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
    <Text style={styles.text}>
      Repositories
    </Text>
    </Pressable>
    </View>;
};

export default AppBar;