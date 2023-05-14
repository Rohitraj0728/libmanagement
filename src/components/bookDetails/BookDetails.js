import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookDetails.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const BookDetails = (props) => {
  const location = useLocation();
  const [bookInfo, setBookInfo] = useState("");
  const [bookCount, setBookCount] = useState(10);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const API_URL = "https://www.googleapis.com/books/v1/volumes/";
    const bookId = location.pathname.split("/")[2];
    console.log(bookId);

    fetch(`${API_URL}${bookId}`)
      .then((response) => response.json())
      .then((json) => {
        setBookInfo(json.volumeInfo);
        console.log(bookInfo.imageLinks);
        console.log(json);
      });
    console.log(location.pathname);
    console.log("sdsa");
  }, []);
  return (
    <div className="student-profile py-4">
      {showAlert && (
        <div class="alert">
          <span
            class="closebtn"
            onclick={() => {
              console.log("closed");
              setShowAlert(false);
            }}
          >
            &times;
          </span>
          Book Issued!! Kindly collect your book from the library
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                {/* <img
                  src={bookInfo.imageLinks.thumbnail}
                  className="profile_img"
                  alt="#"
                /> */}
                <h3>{bookInfo.title}</h3>
                <h4>{bookInfo.subtitle}</h4>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong class="pr-1">Author</strong>
                  {bookInfo.authors}
                </p>
                <p className="mb-0 book-description">
                  <strong class="pr-1">Description:</strong>
                  {bookInfo.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th width="30%">Publisher</th>
                    <td>{bookInfo.publisher}</td>
                  </tr>
                  <tr>
                    <th width="30%">Available no. of books </th>
                    <td>{bookCount}</td>
                  </tr>
                </table>
              </div>
              <button
                className="button"
                onClick={() => {
                  setShowAlert(true);
                  setBookCount(bookCount - 1);
                }}
              >
                Issue Book
              </button>
            </div>
            <div
              style={{
                height: "26px",
              }}
            ></div>
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>Any Queries?
                </h3>
              </div>
              <div className="card-body pt-0">
                <p>
                  If you have any query or issue then visit the library to
                  resolve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
