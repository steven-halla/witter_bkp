import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tweetHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
  tweetHeaderNames: {
    flexDirection: 'row',
  },
  name: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  username: {
    marginHorizontal: 5,
    color: 'grey',
  },
  createdAt: {
    marginHorizontal: 5,
  },
  moreIcon: {
    alignSelf: 'flex-end',
  }
});

export default styles;
