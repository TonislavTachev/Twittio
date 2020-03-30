import {GET_POSTS, CREATE_POST, UPDATE_POST, GET_POST, DELETE_POST} from '../../types'


export default(state,action) =>{

    switch(action.type) {
        
        case GET_POSTS:
          return{
              ...state,
              loading:false,
              error:null,
              posts:action.payload
          }
        case CREATE_POST:
        return{
            ...state,
            posts:[...state.posts, action.payload]
        }
        case UPDATE_POST:
        return{
            ...state,
            posts:state.posts.map(post => post._id === action.payload._id ? action.payload : post)
        }
        case GET_POST:
        return{
            ...state,
            loading:false,
            selected:action.payload
        }
        case DELETE_POST:
        return{
            ...state,
            posts: state.posts.filter(post => post._id !== action.payload),
            refresh:true
        }
        default:
            break;
    }
}