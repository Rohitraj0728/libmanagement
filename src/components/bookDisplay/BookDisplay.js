import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import Gallery from '../gallery/Gallery.js';

class Book_Display extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: []
    };
  }

  search() {
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let items = json.items;
        console.log(items);
        this.setState({items:items})
      }); // TODO: Add a catch method here in case the API call fails
  }
  searchInitial(para) {
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${API_URL}`+para)
      .then(response => response.json())
      .then(json => {
        let items = json.items;
        console.log(items);
        this.setState({items:items})
      }); // TODO: Add a catch method here in case the API call fails
  }

  componentDidMount() {
      this.searchInitial("c++");
  }

  

  render() {
    console.log("rendered");
    
    return (
      <div >

        <div >
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
          <Gallery items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Book_Display;


