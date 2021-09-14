import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.HeaderView}>
          <Text style={styles.HeaderText}>
            <Text style={styles.HeaderTextTop}>DISCOVER {"\n"}</Text>Dashboard
          </Text>
          <Ionicons
            name="notifications-outline"
            size={30}
            color="#000"
            onPress={() => navigation.navigate("Chat")}
          ></Ionicons>
        </View>
        <View style={styles.searchView}>
          <TextInput placeholder="Search"></TextInput>
        </View>

        <View style={styles.EventsTop}>
          <View style={styles.Texts}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.EventTitleTop}>Linkin Park Concert</Text>
                <Text style={styles.EventDateTop}>December 2021</Text>
                <Text style={styles.EventVenueTop}>London, UK</Text>
              </View>
            </View>

            <View style={styles.AllImage}>
              <View style={styles.EventTop}>
                <Image
                  style={styles.picture}
                  source={require("../assets/pictures/download.jpeg")}
                ></Image>
              </View>
              <View style={styles.EventTop}>
                <Image
                  style={styles.picture}
                  source={require("../assets/pictures/portrait-2.jpg")}
                ></Image>
              </View>
              <View style={styles.EventTop}>
                <Image
                  style={styles.picture}
                  source={require("../assets/pictures/portrait-3.jpg")}
                ></Image>
              </View>
            </View>
            <View style={styles.AllImage}>
              <View style={styles.button1view}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => navigation.navigate("Events")}
                >
                  <Text style={styles.text4}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.EventView}>
          <Text style={styles.eventText}>Popular Events</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p1.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>October 2021, 12PM</Text>
              <Text style={styles.EventTitle}>
                Martin Garrix in Concert, London
              </Text>
            </View>
          </View>
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p2.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>December 2021, 7PM</Text>
              <Text style={styles.EventTitle}>DJ Zedd in Concert, London</Text>
            </View>
          </View>
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p3.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>January 2022, 8PM</Text>
              <Text style={styles.EventTitle}>
                David Guetta in Concert, Liverpool
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.EventSection}>
          <View style={styles.EventView}>
            <Text style={styles.eventText}>Upcoming Events</Text>
            <View style={{ marginLeft: 80 }}>
              <Entypo name="dots-two-vertical" size={25} color="black"></Entypo>
            </View>
          </View>
          <View style={styles.EventSlide}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.EventsTops}>
                <View style={styles.Texts}>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={styles.EventTitleTop}>
                        Linkin Park Concert
                      </Text>
                      <Text style={styles.EventDateTop}>December 2021</Text>
                      <Text style={styles.EventVenueTop}>London, UK</Text>
                    </View>
                  </View>
                  <View style={styles.AllImage}>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/download.jpeg")}
                      ></Image>
                    </View>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/portrait-2.jpg")}
                      ></Image>
                    </View>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/portrait-3.jpg")}
                      ></Image>
                    </View>

                    <View style={styles.Arrows}>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        color="white"
                        size={35}
                      ></MaterialIcons>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.EventsTops}>
                <View style={styles.Texts}>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={styles.EventTitleTop}>Remember Concert</Text>
                      <Text style={styles.EventDateTop}>January 2022</Text>
                      <Text style={styles.EventVenueTop}>Liverpool, UK</Text>
                    </View>
                  </View>
                  <View style={styles.AllImage}>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/matin.jpeg")}
                      ></Image>
                    </View>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/zedd.jpeg")}
                      ></Image>
                    </View>
                    <View style={styles.EventTop}>
                      <Image
                        style={styles.picture}
                        source={require("../assets/pictures/guetta.jpeg")}
                      ></Image>
                    </View>

                    <View style={styles.Arrows}>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        color="white"
                        size={35}
                      ></MaterialIcons>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.EventView}>
          <Text style={styles.eventText}>Nearby Events</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 47 }}
        >
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p4.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>22 September, 1PM</Text>
              <Text style={styles.EventTitle}>
                Space of Variation (Free for All)
              </Text>
            </View>
          </View>
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p5.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>January 2021, 12AM</Text>
              <Text style={styles.EventTitle}>
                Michael W. Smith and Darlene
              </Text>
            </View>
          </View>
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p6.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>November 2021, 7PM</Text>
              <Text style={styles.EventTitle}>Nirvana in Concert, London</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(243, 243, 243)",
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
  EventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 16,
  },
  searchView: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 10,
  },

  eventText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  Event: {
    width: 240,
    height: 170,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
    marginHorizontal: 10,
  },

  Texts: {
    marginLeft: 10,
    marginTop: 10,
  },
  picture: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  EventDate: {
    fontSize: 16,
    fontWeight: "bold",
  },

  EventTitle: {
    color: "lightgrey",
    fontWeight: "bold",
  },

  EventsTop: {
    backgroundColor: "#7a45e3",
    width: 330,
    alignSelf: "center",
    marginTop: 22,
    padding: 14,
    borderRadius: 12,
  },
  EventSection: {
    backgroundColor: "white",
    marginTop: 20,
    paddingBottom: 30,
  },
  EventsTops: {
    backgroundColor: "rgb(47, 47, 47)",
    width: 300,
    alignSelf: "center",
    marginTop: 22,
    paddingBottom: 30,
    padding: 14,
    marginRight: 20,
    borderRadius: 12,
  },
  EventSlide: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  EventDateTop: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  EventVenueTop: {
    color: "white",
    fontSize: 14,
  },

  EventTitleTop: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  EventTop: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
  },
  EventButton: {
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

  Arrows: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginLeft: 80,
    marginTop: 20,
    paddingLeft: 3,
    backgroundColor: "#7a45e3",
    justifyContent: "center",
  },
  text4: {
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    color: "#000",
    fontWeight: "900",
  },
  button1: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 30,
    width: 150,
  },
  button1view: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
