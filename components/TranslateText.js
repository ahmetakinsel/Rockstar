import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";

const TranslateText = ({ children }) => {
  const { t } = useTranslation();
  return <Text>{t(children)}</Text>;
};
export default TranslateText;
