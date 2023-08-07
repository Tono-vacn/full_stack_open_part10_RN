import { FlatList, View, StyleSheet, Image } from 'react-native';
import {buttonStyle} from '../theme';
import Text from './Text';

const stylesAvatar = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16
  }
});

const Avatar = ({ ownerAvatarUrl }:any) => {
  return <Image style={stylesAvatar.tinyLogo} source={{ uri: `${ownerAvatarUrl}` }} />;
};

const stylesFoot = StyleSheet.create({
  flexContainer: {
    display: "flex",
    alignItems: "center"
  }
});

const kFormatter = (num:number) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + "k"
    : Math.sign(num) * Math.abs(num);
};

const Foot = ({ label, value }:any) => {
  return (
    <View style={stylesFoot.flexContainer}>
      <Text fontWeight="bold" fontSize="subheading">
        {kFormatter(value)}
      </Text>
      <Text color="textSecondary" fontSize="subheading">
        {label}
      </Text>
    </View>
  );
};



const LanguageTag = ({ tag }:any) => {
  return <Text style={buttonStyle.primary}>{tag}</Text>;
};

const stylesList = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    display: 'flex',
    //flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#e1e4e8',
    padding: 10,
  },
  flexItem: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    backgroundColor: 'white',
    padding: 10,
  },
  flexContainerFootbar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  flexItemFootbar: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    padding: 20,
  },
  flexContainerMiddlePart: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },  
  flexItemMiddlePart: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    padding: 5,
  }
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={stylesList.separator} />;



const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 12,
    backgroundColor: "white"
  },
  flexContainerColSS: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%"
  },
  flexContainerRowAS: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:6
  },
  flexContainerRowSS: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  box: {
    width: 80,
    height: 80
  }
});

const RepositoryItem = ({ item }:any) => {
  // the item object is passed to this component by the FlatList component
  // the item object contains the data that the FlatList component iterates over
  // the item object contains the data for a single repository
  // the item object is destructured to access the data for a single repository
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainerRowSS}>
        <View>
          <Avatar ownerAvatarUrl={ownerAvatarUrl} />
        </View>
        <View style={styles.flexContainerColSS}>
          <Text fontWeight="bold" style={{ marginBottom: 4 }}>
            {fullName}
          </Text>
          <Text color="textSecondary" style={{ marginBottom: 4 }}>
            {description}
          </Text>
          <LanguageTag tag={language} />
        </View>
      </View>
      <View style={styles.flexContainerRowAS}>
        <Foot label={"Starts"} value={stargazersCount} />
        <Foot label={"Forks"} value={forksCount} />
        <Foot label={"Reviews"} value={reviewCount} />
        <Foot label={"Rating"} value={ratingAverage} />
      </View>
    </View>

  );
}

const RepositoryList = () => {
  return (
    <View style={stylesList.flexContainer}>
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={
        // the renderItem prop is a function that returns a component
        // the function is called for each item in the data array
        // the function is called with an object that contains the data for a single repository
        // the object is destructured to access the data for a single repository
        ({ item }) => <RepositoryItem item={item} />
      }
      // other props
    />
    </View>
  );
};

export default RepositoryList;