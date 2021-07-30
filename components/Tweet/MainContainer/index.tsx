import React from 'react';
import { View, Text, Image} from "react-native";
import { TweetType } from "../../../types";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export type MainContainerProps = {
  tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View>
    <View style={ styles.tweetHeaderContainer }>
      <View style={ styles.tweetHeaderContainer }>
        <Text style={ styles.name }>{ tweet.user.name }</Text>
        <Text style={styles.username}>@{ tweet.user.username }</Text>
        <Text style={styles.createdAt}>15s</Text>
    </View>
      <Ionicons name={"chevron-down"} size={16} color={'grey'}  />

      </View>
    <View>
      <Text>{tweet.content}</Text>
      { !!tweet.image && <Image source={{ uri: tweet.image }}></Image> }
    </View>
  </View>
)

export default MainContainer;
