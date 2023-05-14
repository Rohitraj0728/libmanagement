import React, { Component } from "react";
import { FormControl, FormGroup, InputGroup } from "react-bootstrap";
import Gallery from "../gallery/Gallery.js";
// import "./BookDisplay.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class Book_Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: [],
    };
  }

  search() {
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${API_URL}${this.state.query}`)
      .then((response) => response.json())
      .then((json) => {
        let items = json.items;
        console.log(items);
        this.setState({ items: items });
      }); // TODO: Add a catch method here in case the API call fails
  }

  searchInitial(para) {
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${API_URL}` + para)
      .then((response) => response.json())
      .then((json) => {
        let items = json.items;
        console.log(items);
        this.setState({ items: items });
      }); // TODO: Add a catch method here in case the API call fails
  }

  componentDidMount() {
    this.searchInitial("c++");
  }

  render() {
    console.log("rendered");

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Search For Your Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Department" id="navbarScrollingDropdown">
                  <NavDropdown.Item onClick={()=>{this.searchInitial("Electronics and Communication Engineering")}} >ECE</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{this.searchInitial("Computer Science Engineering")}} >CSE</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{this.searchInitial("Electrical Engineering")}} >
                    Electrical
                  </NavDropdown.Item>
                  <NavDropdown.Item>CSE</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Search for a book"
              onChange={ event => this.setState({ query: event.target.value }) }
              onKeyPress={ event => {
                if ('Enter' === event.key) {
                  this.search();
                }
              }} />
             
            </InputGroup>
          </FormGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Gallery items={this.state.items} />
      </div>
    );
  }
}

export default Book_Display;
