import React, {useState, useEffect, useContext} from 'react'
import {View, StyleSheet, Image, FlatList} from 'react-native'
import Progressbar from '../Progress/Progressbar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body,List,ListItem, Right} from 'native-base';
import UserContext from '../../context/UserContext/userContext';

const CommentItem = () => {
    const userContext = useContext(UserContext);
    return (
    <ListItem avatar>
        <Left>
        <Thumbnail source={{ uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' }} />
      </Left>
      <Body>
        <Text>Kumar Pratik</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
        <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
    )
}

export default CommentItem;
