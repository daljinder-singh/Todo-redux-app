import { TODOLIST } from '../action'
const initial_state = {
  list: []
}
const todos = (state = initial_state, action) =>{
  console.log(action)
    switch (action.type) {
        case TODOLIST:
          return {
              ...state,
              list: [...state.list, action.payload]
          }
        default:
          return state
      }
}
export default todos