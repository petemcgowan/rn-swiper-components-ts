import * as React from "react";
import { StyleSheet } from "react-native";

import { FlatListComponent } from "../components/FlatList";
import { View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
