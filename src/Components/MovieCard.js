import React from "react";
import {Card,Button} from "react-bootstrap"
function MovieCard({title,description,image,rating}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" style={{borderRadius:"20px"}} >{rating}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
