import React, {useContext, useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Progressbar from '../Progress/Progressbar';
import UserContext from '../../context/UserContext/userContext';
import { Container, Header, Content, Textarea, Form, Left, Body, Button, Icon, Title} from "native-base";
const Update = ({navigation, route}) => {
    
    const {post_id} = route.params;
    const {post} = route.params;
    const userContext = useContext(UserContext);
    const {updatePost, getPost, selected} = userContext;
    const [userInput, setInput] = useState(post.base);

    const update = () =>{
        updatePost(post_id, userInput);
        setInput('');
        navigation.navigate('Tabs');
    }

    const input = (text)=>{
        setInput(text);
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
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={input} value={userInput}/>
          </Form>
          <Button style={{marginTop:15}} block bordered primary onPress={update}><Text style={{fontSize:16}}>Submit</Text></Button>
        </Content>
      </Container>
    )
}

export default Update
