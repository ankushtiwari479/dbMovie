import {FETCH_POPULAR_MOVIES,SET_CURRENT_ITEM,FETCH_MOVIES_MATCHED} from '../actions/types';

const initialState ={
  items:[],
  item:{},
  searchResult:[]
}

export default function(state=initialState,action){
  switch(action.type){
    case FETCH_POPULAR_MOVIES:
      return{
        ...state,
        items:action.payload
      };
    case SET_CURRENT_ITEM:
      return{
          ...state,
          item:action.payload
      }
      case FETCH_MOVIES_MATCHED:
        return{
          ...state,
          searchResult:action.payload
        }
    default:
      return state;
  }
}
