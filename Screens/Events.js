import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

const Events = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View style={styles.HeaderView}>
            <Text style={styles.HeaderText}>
              <Text style={styles.HeaderTextTop}>SCHEDULE {"\n"}</Text>Events
            </Text>
            <Ionicons
              name="notifications-outline"
              size={30}
              color="#000"
              onPress={() => navigation.navigate("Chat")}
            ></Ionicons>
          </View>
          <View style={styles.DateView}>
            <View>
              <Text style={styles.TextDate}>24</Text>
              <Text style={styles.TextDay}>sat</Text>
            </View>
            <View>
              <Text style={styles.TextDate}>25</Text>
              <Text style={styles.TextDay}>sun</Text>
            </View>
            <View style={styles.ActiveDay}>
              <Text style={styles.TextDay}>mon</Text>
              <Text style={styles.TextDate}>26</Text>
              <View style={styles.ViewDot}>
                <Entypo
                  name="dot-single"
                  size={50}
                  style={{ marginLeft: 43, position: "absolute" }}
                  color="#7a45e3"
                ></Entypo>
                <Entypo
                  name="dot-single"
                  size={50}
                  style={{ marginLeft: 70 }}
                  color="#db3c76"
                ></Entypo>
              </View>
            </View>
            <View>
              <Text style={styles.TextDate}>27</Text>
              <Text style={styles.TextDay}>tue</Text>
            </View>

            <View>
              <Text style={styles.TextDate}>28</Text>
              <Text style={styles.TextDay}>wed</Text>
            </View>
          </View>
        </View>
        <View style={styles.AllEvent}>
          <View style={styles.textReverse}>
            <Text style={styles.textReverseInline}>10:00 AM - 12:00 AM</Text>
          </View>
          <View style={styles.Events}>
            <View style={styles.Texts}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.EventTitle}>Linkin Park Concert</Text>
                  <Text style={styles.EventDate}>December 2021</Text>
                  <Text style={styles.EventVenue}>London, UK</Text>
                </View>
                <View style={{ marginLeft: 80 }}>
                  <Entypo
                    name="dots-two-vertical"
                    size={25}
                    color="white"
                  ></Entypo>
                </View>
              </View>
              <View style={styles.AllImage}>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/download.jpeg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/portrait-2.jpg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/portrait-3.jpg")}
                  ></Image>
                </View>

                <View style={styles.Arrow}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    color="white"
                    size={35}
                    onPress={() => navigation.navigate("EventDetails")}
                  ></MaterialIcons>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.AllEvent}>
          <View style={styles.textReverse}>
            <Text style={styles.textReverseInline}>11:00 PM - 12:30 PM</Text>
          </View>
          <View style={styles.EventsNoSelect}>
            <View style={styles.Texts}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.EventTitleNS}>Hardwell Mix Step</Text>
                  <Text style={styles.EventDateNS}>September 2021</Text>
                  <Text style={styles.EventVenueNS}>Manchester, UK</Text>
                </View>
                <View style={{ marginLeft: 80 }}>
                  <Entypo
                    name="dots-two-vertical"
                    size={25}
                    color="black"
                  ></Entypo>
                </View>
              </View>
              <View style={styles.AllImage}>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/hardwell.jpeg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/avicii.jpeg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/hardwell2.jpeg")}
                  ></Image>
                </View>

                <View style={styles.ArrowNS}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    color="white"
                    size={35}
                  ></MaterialIcons>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.AllEvent, { marginBottom: 50 }]}>
          <View style={styles.textReverse}>
            <Text style={styles.textReverseInline}>12:00 AM - 11:00 PM</Text>
          </View>
          <View style={styles.EventsNoSelect}>
            <View style={styles.Texts}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.EventTitleNS}>Remember Concert</Text>
                  <Text style={styles.EventDateNS}>January 2022</Text>
                  <Text style={styles.EventVenueNS}>Liverpool, UK</Text>
                </View>
                <View style={{ marginLeft: 80 }}>
                  <Entypo
                    name="dots-two-vertical"
                    size={25}
                    color="black"
                  ></Entypo>
                </View>
              </View>
              <View style={styles.AllImage}>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/matin.jpeg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/zedd.jpeg")}
                  ></Image>
                </View>
                <View style={styles.Event}>
                  <Image
                    style={styles.picture}
                    source={require("../assets/pictures/guetta.jpeg")}
                  ></Image>
                </View>

                <View style={styles.ArrowNS}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    color="white"
                    size={35}
                  ></MaterialIcons>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topbar: {
    backgroundColor: "rgb(243, 243, 243)",
    paddingBottom: 30,
  },

  HeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    marginHorizontal: 16,
  },

  HeaderText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  HeaderTextTop: {
    fontSize: 13,
    color: "lightgrey",
  },
  Events: {
    backgroundColor: "#7a45e3",
    width: 300,
    alignSelf: "flex-end",
    marginTop: 22,
    padding: 14,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  EventsNoSelect: {
    backgroundColor: "rgb(243, 243, 243)",
    width: 300,
    alignSelf: "flex-end",
    marginTop: 22,
    padding: 14,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  EventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 16,
  },
  searchView: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  Texts: {
    marginLeft: 10,
    marginTop: 10,
  },
  EventDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  EventVenue: {
    color: "white",
    fontSize: 14,
  },

  EventTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  EventDateNS: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  EventVenueNS: {
    color: "lightgrey",
    fontSize: 14,
  },

  EventTitleNS: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  TextDate: {
    fontSize: 35,
    textAlign: "center",
  },
  TextDay: {
    fontSize: 20,
    textAlign: "center",
    color: "lightgrey",
  },
  DateView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  ActiveDay: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 27,
    marginTop: -16,
  },
  ViewDot: {
    flexDirection: "row",
    marginHorizontal: -60,
  },
  picture: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  Event: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
  },
  AllImage: {
    flexDirection: "row",
  },
  Arrow: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginLeft: 80,
    marginTop: 20,
    paddingLeft: 3,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    justifyContent: "center",
  },

  ArrowNS: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginLeft: 80,
    marginTop: 20,
    paddingLeft: 3,
    backgroundColor: "#7a45e3",
    justifyContent: "center",
  },
  textReverse: {
    marginTop: 22,
    marginLeft: -30,
    marginRight: -40,
  },
  textReverseInline: {
    fontSize: 17,
    color: "lightgrey",
    transform: [{ rotate: "270deg" }],
    marginTop: 75,
  },
  AllEvent: {
    flexDirection: "row",
    borderBottomColor: "rgb(243, 243, 243)",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
});
