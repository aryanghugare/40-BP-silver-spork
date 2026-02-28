import React from "react";
import { useState } from "react";
import "../styles/review.css"

export default function Review({ review, onPreviousClick, onNextClick, onRandomClick }) {
    const { name, job, image, text, id } = review;
    // author, job, info, and person - img.
    return <article className="review">
        <section>
            <img className="person-img" src={image} />
        </section>
        <section className="review-details">
            <label author-id={id} htmlFor="name" className="author">Name :{name}</label>
            <label htmlFor="name" className="job">Job :{job}</label>
            <label htmlFor="name" className="info">Text :{text}</label>
            <footer >
                <button onClick={onPreviousClick} className="prev-btn">Previous</button>
                <button onClick={onNextClick} className="next-btn">Next</button>
                <button onClick={onRandomClick} className="random-btn">Surprise Me</button>
            </footer>
        </section>
    </article>
}

// comment