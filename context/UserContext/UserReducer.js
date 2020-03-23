import {GET_POSTS, CREATE_POST} from '../../types'


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

        default:
            break;
    }
}