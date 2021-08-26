import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
const dispatch = useDispatch()
const selector = useSelector(state => state.list)
  const [ todo, setTodo ] =useState('')
  const [ filter, setFilter] = useState([])

  const submit = (e) =>{
      e.preventDefault()
    dispatch({type : 'TODO_LIST', payload : todo})
  }
  const rows = []
  useEffect(() => {
    // const seaarch = selector.filter(obj=> obj === todo)
    selector.map(item => {
      if( item.indexOf(todo) === -1 ) return;
      rows.push(item)
    })
    setFilter(rows)
  },[todo])  
 
  console.log(filter)
  
  const inputsHandler = (e) =>{
    setTodo(e.target.value)  
  }
    return (
        <div>
            <form >
              <div>
                <input type="text" placeholder="Enter some text..."
                onChange={inputsHandler} 
                />
              </div>
              <button onClick = {submit}>Submit</button>
            </form>
            <ul>
            {
              selector.map((item, index) =>{
                return (
                  <li key = {index}>{item}</li>
                )
              })
            }
            </ul>
        </div>
    )
}
export default Todo