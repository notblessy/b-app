import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Page() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Image
            source={require("../assets/pass.png")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          />
          <Text style={{ fontSize: 28, fontFamily: "Special04" }}>B</Text>
          <View style={{ width: 40, height: 40 }}></View>
        </View>
        <View style={styles.headerTab}>
          <Pressable>
            <Text>For you</Text>
          </Pressable>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}git push -u origin main
      />
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  headerTitle: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
