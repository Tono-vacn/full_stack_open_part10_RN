import { StyleSheet } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6"
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    android: "Roboto",
    ios: "Arial",
    default: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700"
  },
  backgroundColor: {
    mainBackground: "#e1e4e8",
    appBar: "#24292e"
  }
};

export const buttonStyle = StyleSheet.create({
  primary: {
    color: "#fff",
    backgroundColor: theme.colors.primary,
    padding: 6,
    textAlign: "center",
    borderRadius: 4
  }
});

export const formStyle = StyleSheet.create({
  primary: {
    height: 40,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 4,
  }
});

export default theme;