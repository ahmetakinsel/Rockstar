import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import { Entypo, AntDesign, EvilIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";

const EventDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Entypo
            name="chevron-left"
            size={30}
            onPress={() => navigation.goBack()}
          ></Entypo>
        </View>
        <View style={styles.Texts}>
          <Text style={styles.EventTitle}> Linkin Park Concert</Text>
          <Text style={styles.EventDate}>December 2021, London UK</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              <AntDesign name="heart" color="#fff" size={12}>
                {" "}
              </AntDesign>
              Tracking
            </Text>
          </TouchableOpacity>
          <View style={styles.linkButton}>
            <TouchableOpacity>
              <EvilIcons
                name="external-link"
                size={32}
                color="#8f00ed"
                style={{ marginTop: 8 }}
              ></EvilIcons>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
              marginLeft: 120,
            }}
          >
            <Entypo name="dots-two-vertical" color="black" size={30}></Entypo>
          </View>
        </View>
        <View style={styles.linkUpView}>
          <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: 30 }}>
            LineUp
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View>
            <Image
              style={styles.linkUpImg}
              source={require("../assets/pictures/download.jpeg")}
            ></Image>
            <Text
              style={{
                fontSize: 16,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              Samantha
            </Text>
          </View>
          <View>
            <Image
              style={styles.linkUpImg}
              source={require("../assets/pictures/portrait-2.jpg")}
            ></Image>
            <Text
              style={{
                fontSize: 16,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              Tommy
            </Text>
          </View>
          <View>
            <Image
              style={styles.linkUpImg}
              source={require("../assets/pictures/portrait-3.jpg")}
            ></Image>
            <Text
              style={{
                fontSize: 16,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              Micheal
            </Text>
          </View>
        </View>
        <View style={styles.locationTextView}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Location</Text>
        </View>

        <View style={styles.LocationContainer}>
          <View style={styles.locationView}>
            <MapView
              style={styles.locationImg}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <View style={styles.itemsView}>
            <View style={styles.concertView}>
              <Image
                style={styles.concertImg}
                source={require("../assets/pictures/concert.jpeg")}
              ></Image>
            </View>
            <View style={styles.videoView}>
              <Text style={styles.videoText}>VIDEO</Text>
              <AntDesign name="playcircleo" size={50} color="white"></AntDesign>
            </View>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Description
          </Text>
        </View>
        <View style={styles.descriptionTextView}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 60,
    marginLeft: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    marginTop: 10,
    paddingTop: 2,
    alignSelf: "center",
    fontSize: 15,
  },
  linkButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 15,
    backgroundColor: "rgb(240, 236, 252)",
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  linkUpView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
    marginBottom: 10,
  },
  Texts: {
    marginLeft: 30,
    marginTop: 30,
  },

  EventTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },

  EventDate: {
    color: "lightgrey",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#8f00ed",
    width: 120,
    height: 45,
    borderRadius: 10,
  },
  linkUpImg: {
    width: 80,
    height: 80,
    borderRadius: 300,
  },
  locationTextView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 30,
    marginTop: 20,
  },

  LocationContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  itemsView: {
    flexDirection: "column",
    marginRight: 20,
  },
  locationImg: {
    width: 190,
    height: 260,
    marginLeft: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  concertView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  concertImg: {
    width: 130,
    height: 150,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 10,
  },

  videoView: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginLeft: 12,
    borderRadius: 12,
    backgroundColor: "rgb(255, 119, 173)",
  },
  videoText: {
    transform: [{ rotate: "270deg" }],
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  descriptionView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  descriptionTextView: {
    flexDirection: "row",
    marginBottom: 30,
  },
});
