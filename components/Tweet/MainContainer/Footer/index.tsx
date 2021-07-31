import React from 'react';
import { View, Text } from "react-native";
import { Ionicons, Feather, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TweetType } from "../../../../types";


export type FooterContainerProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterContainerProps) => (
  <View style={ styles.container }>
    <View>
      <Feather name={"message-circle"} size={20} color={'grey'} />
      <Text style={ styles.number } >{ tweet.numberOfComments }</Text>
    </View>
    <View>
      <EvilIcons name={"retweet"} size={20} color={'grey'} />
      <Text style={ styles.number } >{ tweet.numberOfRetweets }</Text>
    </View>

  </View>
)

export default Footer;
