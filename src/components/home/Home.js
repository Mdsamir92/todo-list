import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Welcome from '../Welcome';


const getLocalItem = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};



function Home() {
 

     const navigate =  useNavigate()

  const [activity, setActivity] = useState("");
  const [listdata, setlistData] = useState(getLocalItem());

  

  function addActivity() {
    if(!activity){
      toast.error("write something! to add todo")
    }else{
      toast.success("Added successfully 😍")
      setlistData((listdata) => {
        const updatedList = [...listdata, activity];
        setActivity("");
        return updatedList;
        
      });
    }
  }

  function removeActivity(i) {
    const updatedlistData = listdata.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedlistData);
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(listdata));
  }, [listdata]);

//token
   const token =  localStorage.getItem("token")
  
   console.log(token);

   useEffect(() => {
  
    if(token===null){
     
      navigate("/")
    }
  });

  


  return (
 

    <div className="head">
     <Welcome/>
    <div className="container">
   
     
    <h2>Todo List📙</h2>
      
        <input
          type="text"
          name="name"
          placeholder="Add Activity..."
          value={activity}
          required
          autoComplete='off'
          onChange={(e) => setActivity(e.target.value)}
        />
      
    
        <button onClick={addActivity}>
          Add
        </button>
        <p className="list-heading">Here is Your List🙂 </p>
       
        {
          listdata.map((data, i) => {
            return (
              <>
              
                  <div key={i} className="listdata">{data}</div>
                  <div className="btn-pos">
                    <button variant="primary" onClick={() => removeActivity(i)}>
                     X
                     </button>
                  </div>
               
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Home



