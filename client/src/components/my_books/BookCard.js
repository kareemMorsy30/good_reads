import React from "react";
import ChangeStateBtn from "./ChangeStateBtn";
import ReactStars from 'react-rating-stars-component';
import {connect} from 'react-redux';
import {rateBook} from "../../API/my_books_api";
import {Link} from "react-router-dom";
const BookCard = (props) => {
    const {bookID} = props
    const book = getBookById(props.books,bookID)

    const ratingChanged = (newRating) => {
        console.log(newRating)
        props.rateBook(book.book._id,newRating)
    }
    return (<div className="book-card">
        <div className="cover-container">
            <img src={book.book.image ? `${process.env.REACT_APP_BACKEND_URL}${book.book.image}` : "https://www.esm.rochester.edu/uploads/NoPhotoAvailable-335x419.jpg"} alt={book.book.name}/>
        </div>
        <div className="book-info">
            <Link to={`/book/${book.book._id}`}><h3>{book.book.name}</h3></Link>
            <h5>By: <Link to={`/authors/${book.book.author._id}`}>{book.book.author.name}</Link></h5>
            <div className="module line-clamp">
                <p className="book-card-desc ">{book.book.description}</p>
            </div>
            <ChangeStateBtn currentStatus={book.status} book_id={book.book._id}/>
            <div className="rating-container">
                <p className="rate-text">Avg Rate: </p>
                <ReactStars
                    count={5}
                    size={24}
                    value={book.book.avgRate}
                    edit={false}
                    color2={'#F99A3D'} />
                <p className="rate-text">Rate it: </p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={book.book.userRate}
                    color2={'#F99A3D'} />
            </div>
        </div>
    </div>)
}

const getBookById = (books,id) => {
    return books.filter((book) => id === book.book._id)[0]
}

const mapStateToProps = (state) => {
    return {
        books: state.myBooksReducer.books,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rateBook: rateBook(dispatch),
        dispatch
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BookCard)