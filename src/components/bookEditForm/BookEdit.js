import React, { useState } from 'react'
const BookEdit = () => {
    const [formData, setFormData] = useState({
        name: '',
        bookid: '',
        copies: '',
        file: ''
    });

    const { name, bookid, copies, file } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });


    return (
        <section className="container">
            <h1 className="large text-light">Edit Book Details</h1>
            <form className="form" >
                <div className="form-group">
                    <input type="text" placeholder="Name of the book" name="name" required />
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Book ID"
                        name="bookid"
                        maxLength={10}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Number of copies available"
                        name="copies"
                        maxLength={5}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="file"
                        placeholder="Upload book cover photo"
                        name="file"
                        required
                    />
                </div>
                <input type="submit" class="btn btn-danger" value="Save" />
            </form>

        </section >

    )
};

export default BookEdit