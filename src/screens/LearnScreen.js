import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { learnDatabase } from "../../database";
import LearnItem from "../components/LearnItem";
import Cases from "../components/Cases";
import Constants from "expo-constants";

const LearnScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Constants.statusBarHeight + 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginLeft: 15,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/sono_logo.png")}
          style={{ height: 45, width: 45 }}
        />
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 36 }}>Learn</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={learnDatabase}
          ListHeaderComponent={() => (
            <View>
              <Cases />
              <Text style={styles.header}>Lessons</Text>
            </View>
          )}
          renderItem={(item) => <LearnItem item={item.item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    backgroundColor: "#ffffff",
    paddingBottom: 30,
    paddingTop: 1,
    height: 120,
  },
  logoStyle: {
    height: 70,
    width: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 15,
  },
});

export default LearnScreen;
