import React, { Component } from "react";
import book from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        let { title, imageLinks, infoLink } = item.volumeInfo;
        let bookId = item.id;
        return (
          <Link to={{ pathname: `/bookDetail/${bookId}` }} className="book">
            <img
              src={undefined !== imageLinks ? imageLinks.thumbnail : { book }}
              alt={`Pictured: The cover for the book ${title}.`}
              className="bookCover"
            />
            <header className="bookTitle">{title}</header>
          </Link>
        );
      })}
    </div>
  );
}

export default Gallery;
