import React, { Component } from "react";
import book from "../../img/logo.png";
import "./Gallery.css";



function Gallery({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        let { title, imageLinks, infoLink } = item.volumeInfo;
        return (
          <a
            key={index}
            className="book"
            href={infoLink}
            target="_blank"
            rel="noopener"
          >
            <img
              src={undefined !== imageLinks ? imageLinks.thumbnail : { book }}
              alt={`Pictured: The cover for the book ${title}.`}
              className="bookCover"
            />
            <header className="bookTitle">{title}</header>
          </a>
        );
      })}
    </div>
  );
}

export default Gallery;

