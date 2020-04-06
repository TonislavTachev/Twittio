import React, {useState, useEffect, useContext} from 'react'
import {View, StyleSheet, Image, FlatList} from 'react-native'
import Progressbar from '../Progress/Progressbar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Textarea, Form, Text, Button, Left, Body,List,ListItem, Right} from 'native-base';
import UserContext from '../../context/UserContext/userContext';
import Modal from 'react-native-modal'

const Comment = ({navigation, route}) => {

    const userContext = useContext(UserContext);
    const {getPost, selected} = userContext;
    const [isModalVisible, setisVisible] = useState(false);
    const {post_id} = route.params;
    const {post} = route.params;
    const {user} = route.params;

     if(user == null){
        return <Progressbar/>
     }

     const openModal = () =>{
         setisVisible(true);
     }

     const closeModal = () =>{
         setisVisible(false);
     }

    return (
        <Container>
        <Header>  
        <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={()=>navigation.goBack()}/>
            </Button>
          </Left>
          <Body>
        
          </Body>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg'}} />
                <Body>
                  <Text>{user.firstName}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {post.base}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} onPress={openModal}>
                  <Text>Add a comment</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="favorite-border" size={20} color='#87838B'/>
                  <Text>1,926 likes</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

         {/* Modal to be rendered upon button click */}
          <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
              <View style={{flex: 1, backgroundColor:'#fff', justifyContent:'center'}}>
              <Content padder>
                 <Text style={{textAlign:'center', fontSize:20, paddingBottom:10, paddingTop:10}}>Submit your comment</Text>
                 <Form>
                   <Textarea rowSpan={5} bordered placeholder="Textarea" />
                </Form>
        
              </Content>
              </View>
        </Modal>
 
            <List>
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
                
            </List>
        </Content>
      </Container>
    )
}

export default Comment;
