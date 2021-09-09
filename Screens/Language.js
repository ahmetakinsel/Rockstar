import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TranslateText from "../components/TranslateText";
import { LanguageContext } from "../context/LanguageContext";
const Language = () => {
  const { i18n, t } = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <TranslateText>Profile page welcome</TranslateText>
      <TouchableOpacity
        onPress={() => i18n.changeLanguage("en")} //Here I change the language to "en" English
        style={styles.button}
      >
        <Text style={{ color: "#000" }}>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => i18n.changeLanguage("es")} //Here I change the language to "es" Spanish
        style={styles.button}
      >
        <Text style={{ color: "#000" }}>ES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => i18n.changeLanguage("de")} //Here I change the language to "de" German
        style={styles.button}
      >
        <Text style={{ color: "#000" }}>DE</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
