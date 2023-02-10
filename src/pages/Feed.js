import React, {useContext,useState,useEffect} from 'react';

import { BioData } from '../App';

const Feed = () => {
   const {record}= useContext(BioData);
  
 
 const data1=localStorage.getItem("recorddata");
const data= JSON.parse(data1);

 
  return (
    <div>
      
      {/* <h1>hellow{"+"+data[0].des} </h1> */}

      
      {
          
   
         
          console.log(data[0].des)
       
      }
    
    </div>
  );
}

export default Feed;
