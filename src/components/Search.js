import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';


function Search(props) {
    const [searchString, setsearchString] = useState("");

    const handleSelect = e => {
        props.findFood(e.target.value)
        
        setsearchString(e.target.value);
   
    }
 
    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={searchString} type="text" onChange={handleSelect} />
      </>
    );
  }
  
  export default Search;