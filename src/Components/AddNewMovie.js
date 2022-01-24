import React, { useState } from 'react';
import {Form,Button} from "react-bootstrap"
function AddNewMovie({addFunction}) {
    const [input, setInput] = useState({id:Math.random()});
   
  return (
    <Form style={{display:'flex', justifyContent:"space-evenly"}} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title of movie</Form.Label>
      <Form.Control type="text" placeholder="Enter Title of movie" 
      onChange={(e)=>setInput({...input,title:e.target.value})} />
      <Form.Label>Description movie</Form.Label>
      <Form.Control type="text" placeholder="Enter Description movie" 
      onChange={(e)=>setInput({...input,description:e.target.value})} />
      <Form.Label>Poster of movie</Form.Label>
      <Form.Control type="text" placeholder="Enter Poster of movie" 
      nChange={(e)=>setInput({...input,posterURL:e.target.value})} />
      <Form.Label>Rating</Form.Label>
      <Form.Control type="text" placeholder="Enter Rating" 
      onChange={(e)=>setInput({...input,rating:e.target.value})}/>
    </Form.Group>
    <Button style={{width:"80px",marginBottom:"200px", marginTop:'100px'}} variant="primary" 
    onClick={()=>addFunction(input)} >
      Submit
    </Button>
  </Form>
  );
}
export default AddNewMovie;
