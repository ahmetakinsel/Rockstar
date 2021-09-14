import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titlebar}>
        <View style={styles.back}>
          <Entypo
            name="chevron-left"
            size={35}
            onPress={() => navigation.goBack()}
          ></Entypo>
        </View>
      </View>
      <View style={styles.profileView}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Profile</Text>
      </View>
      <View style={styles.profileImage}>
        <Image
          style={styles.profilePic}
          source={require("../assets/pictures/download.jpeg")}
        ></Image>
      </View>
      <View style={styles.profileName}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 8 }}>
          Shreya Ghosal
        </Text>
      </View>
      <View style={styles.profileLocation}>
        <FontAwesome
          name="location-arrow"
          size={18}
          color="#8f00ed"
          style={{ marginRight: 8, marginTop: 3 }}
        ></FontAwesome>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>London</Text>
      </View>
      <View style={styles.FollowSectionContainer}>
        <View style={styles.Following}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1167</Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Following</Text>
        </View>
        <View style={styles.Followers}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1227</Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Followers</Text>
        </View>
      </View>
      <View style={styles.recentWork}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Recent Event</Text>
      </View>
      <View style={styles.Event}>
        <Image
          style={styles.picture}
          source={require("../assets/pictures/p1.jpg")}
        ></Image>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titlebar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  back: {
    marginTop: 50,
    marginLeft: 10,
  },
  profileView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -30,
    marginRight: 10,
  },
  profileImage: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  profilePic: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  profileName: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileLocation: {
    flexDirection: "row",
    justifyContent: "center",
  },
  FollowSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },

  recentWork: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 40,
    marginLeft: 20,
  },

  Event: {
    width: 340,
    height: 170,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
    marginLeft: 20,
    marginHorizontal: 10,
  },

  picture: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
