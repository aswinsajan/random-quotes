import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  
} from "mdb-react-ui-kit";
import { Button, Container } from "react-bootstrap";




function Dash() {
  const randomNumber = Math.floor(Math.random() * 30);
  const [quo, setQuo] = useState("Click To Generate Quote");
  const [data, setData] = useState({});
  const [author, setAuthor] = useState("");

  fetch("https://dummyjson.com/quotes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // console.log(data.quotes[3].quote);
      setData(data);
      //   console.log("random", data.quotes[randomNumber].quote);
    })
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );

  function genQuote() {
    setQuo(data.quotes[randomNumber].quote);
    setAuthor(data.quotes[randomNumber].author);

    // console.log(data.quotes[randomNumber].quote);
  }


  return (
    <div>
      <Container className="mt-1 bg-info">
        <div className="m-lg-5 p-lg-5">
          <MDBCard alignment="center" >
            <MDBCardHeader>Quotes For You</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{quo}</MDBCardTitle>
              <MDBCardText></MDBCardText>
              <Button onClick={genQuote}>Generate Quote</Button>
            </MDBCardBody>
            <MDBCardFooter><p>author</p>- {author}</MDBCardFooter>
          </MDBCard>
        </div>
      </Container>


    </div>
  )
}

export default Dash