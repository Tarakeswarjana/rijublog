import React from "react";
import { useState, useContext } from "react";
import Feed from "./Feed";
import "../css/Upload.css";
import { BioData } from "../App";


const Upload = () => {
  const {setrecord,record}=useContext(BioData);
  


  const [name, setname] = useState("ram");
  const [fromdata, setfromdata] = useState({ des: "", link: "", picsrc: "" });
  // const [record, setrecord] = useState([]);
  let [flag, setflag] = useState(0);

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setfromdata({ ...fromdata, [name]: value });
  };

  const handlesubmitt = (e) => {
    e.preventDefault();
    const newrecord = { ...fromdata, id: new Date().getTime().toString() };
    
    setrecord([...record, newrecord]);
    // console.log(record);
    setfromdata({ des: "", link: "", picsrc: "" });
    setflag(1);
  };


localStorage.setItem("recorddata",JSON.stringify(record) );


  return (
    <div>
 
      <form onSubmit={handlesubmitt}>
        <div className="frommain">
          <div className="fromdiv">
            <input
              type="text"
              name="des"
              value={fromdata.des}
              onChange={handleinput}
              placeholder="description"
            ></input>
          </div>
          <div className="fromdiv">
            <input
              type="text"
              name="link"
              value={fromdata.link}
              onChange={handleinput}
              placeholder="videolink"
            ></input>
          </div>
          <div className="fromdiv">
            <input
              id="file"
              type="file"
              name="pic"
              value={fromdata.picsrc}
              onChange={handleinput}
              placeholder="coverphoto"
            ></input>
          </div>

          <button type="submit">uploadiiiiii</button>
        </div>
      </form>
      <Feed/>
    </div>
  );
};

export default Upload;

