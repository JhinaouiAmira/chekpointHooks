import React from 'react';
import {Form,FormControl,Button} from "react-bootstrap"
import {  useState} from "react";
function Filter({filter}) {
    const [input, setInput] = useState(""); 
  return (
        <Form className="d-flex"  style={{marginRight:'300px',marginBottom:"50px",marginTop:"50px"}}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{marginLeft:'300px'}}
            onChange={(e)=>filter(e.target.value)}
          />
          <Button variant="outline-success" onClick={()=>filter(input)} >Search</Button>
        </Form>
   
  );
}

export default Filter;
