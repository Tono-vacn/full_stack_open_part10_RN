import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorLabel: {
    color: theme.colors.label,
  }, 
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  // fontBackground: {
  //   backgroundColor: theme.colors.primary,
  // }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }:any) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'lable' && styles.colorLabel,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    // fontBackground === 'label' && styles.fontBackground,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;