import React from 'react'
import { useReducer } from 'react'


function reducer(state, action){
  switch(action.type){
    case "puls":
      return{...state,count:state.count+1}
    break
    case"minus":
    return{...state,count:state.count-1}
  }
}


const App = () => {


  const [state,dispatch]= useReducer(reducer, {
    count:0
  })
   
  var Puls=()=>{
    dispatch({
      type:"puls"
    })
  }

  var minus=()=>{
    dispatch({
      type:'minus'
    })
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <h1>{state.count}</h1>
          <button className='btn  btn-success mx-2' onClick={Puls} >+</button>
          <button className='btn  btn-danger'  onClick={minus}>-</button>
        </div>
      </div>
      
    </div>
  )
}

export default App