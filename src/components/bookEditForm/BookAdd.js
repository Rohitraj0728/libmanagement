import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const BookAdd = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        Scholar_Id: '',
        password: '',
        password2: '',
        file: ''
    });

    const { name, email, mobile, Scholar_Id, password, password2, file } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Password do not match');
        } else {

            console.log(formData);
        }
    };
    return (
        <section className="container">
            <h1 className="large text-light">Book Details</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name of the book" name="name" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book Id" name="name" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Author Name" name="author" required />

                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Number of copies available"
                        name="copies"
                        maxLength={4}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Related to which department"
                        name="department"
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
                <input type="submit" class="btn btn-danger" value="Add" />
            </form>

        </section >

    )
};

export default BookAdd