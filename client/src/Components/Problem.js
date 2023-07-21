import React, { useEffect, useState } from "react";
import axios from 'axios'


const Problem = () =>{
    const [probset, setProbset] = useState({
        name: "",
        nos: 0,
        statement: ""
      });
    
    
    const fetchData = async() => {
        const res = await axios.get(`http://localhost:5000/displayProblem`)
          setProbset({
            name: res.data.pName,
            nos: res.data.pNo,
            statement: res.data.pStatement
      });
    }

    useEffect(()=>{
        fetchData();
    })
    

    return(
        <>
      
        <div>
            <h1>{probset.nos}</h1>
            <h1>{probset.name}</h1>
            <p>{probset.statement}</p>           
        </div>       
        </>
    )
    
}
export default Problem
