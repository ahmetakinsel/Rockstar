import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.HeaderView}>
          <Text style={styles.HeaderText}>Events</Text>
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
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
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
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
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
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.EventView}>
          <Text style={styles.eventText}>Nearby Events</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 25 }}
        >
          <View style={styles.Events}>
            <View style={styles.Event}>
              <Image
                style={styles.picture}
                source={require("../assets/pictures/p4.jpg")}
              ></Image>
            </View>
            <View style={styles.Texts}>
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
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
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
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
              <Text style={styles.EventDate}>20 December 2021</Text>
              <Text style={styles.EventTitle}>Rock Concert</Text>
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
    backgroundColor: "#fff",
  },

  HeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    marginHorizontal: 16,
  },

  HeaderText: {
    fontWeight: "bold",
    fontSize: 20,
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
});
