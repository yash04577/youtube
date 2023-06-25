import axios from 'axios';
import React, {useState} from 'react'
import Context from './Context';

const State = (props) => {
    
   

    const [query, setQuery] = useState("java");


  return (
    <Context.Provider value={{query, setQuery}}>
        {props.children}
    </Context.Provider>
  )
}

export default State