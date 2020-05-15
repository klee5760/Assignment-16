import React from "react";
import "./style.css"
import {Row,Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
    <div className="card">
        <div className="card-body player">
            <div className = "article">
            <h3>Books that You Saved</h3>
            </div>
        </div>
    </div>
    ):(
        <div className="card">
        <div className="card-body player">
            <div className = "article"></div>
            <h3>Books that You Saved</h3>
            {props.savedBooks.map(savedbook => {
                return(
                    <li className="saved-list list-group-item">
                        <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                            {/* col-3 show image of the book */}
                            <Col size="2" className="bookImage">
                                <img src={savedbook.image} alt={savedbook.title} />
                            </Col>
                            <col size="1" className ="emptyCol"/>
                            {/* col-9 show information of the book */}
                            <Col size = "9" className="bookInfo">
                                <Row>
                                    <h2 className = "bookTitle">{savedbook.title}</h2>
                                </Row>
                                <Row>
                <h3 className = "bookAuthor">{savedbook.authors}</h3>
                                </Row>
                                <Row>
                <h3 className = "bookDescription">{savedbook.description}</h3>
                                </Row>
                            </Col>
                        </Row>
                        <br></br>
                        <row className="buttonDiv">
                            <button className="deleteBook btn btn-danger" id={savedbook.id_} 
                            onClick={()=> props.handleDeleteButton(savedbook._id)}>
                            Delete Book
                            </button>
                            <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>
                        </row>
                    </li>
                );
            })}
            </div>
            </div>

            
    )
        }

        export default SavedResult
