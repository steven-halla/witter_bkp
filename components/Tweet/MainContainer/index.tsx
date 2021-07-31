import React from "react";
import { Alert, Image, Text, TextInput, View } from "react-native";
import { TweetType } from "../../../types";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Footer from "./Footer";
import { Link } from "@react-navigation/native";

export type MainContainerProps = {
  tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>15s</Text>
      </View>
      <Ionicons name={"chevron-down"} size={16} color={"grey"} />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>{tweet.content}</Text>
      {tweet.image && <Image style={styles.image} source={{ uri: tweet.image }}/>}
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
