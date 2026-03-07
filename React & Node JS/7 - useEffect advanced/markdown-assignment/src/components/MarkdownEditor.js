import React, { useState, useEffect } from 'react'
import Markdown from "react-markdown";
export default function MarkdownEditor() {
    const [markdownText, setMarkdownText] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let timer;
        function debounce(fn, delay) {
            return function (...args) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    fn.apply(this, args)
                }, delay);
            }
        }

        debounce(() => setLoading(false), 1000)();

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }

    }, [markdownText])


    function handleChange(event) {
        setMarkdownText(event.target.value);
        setLoading(true);
    }

    return (
        <>
            {loading ? <p className='loading'>generating preview...</p> : <p className='loading'></p>}
            <section className='markdown-editor'>

                <textarea rows={20} className='textarea' name="" id="" value={markdownText}
                    onChange={(event) => handleChange(event)}>

                </textarea>
                <section className='preview'>
                    <Markdown>{!loading ? markdownText : ''}</Markdown>
                </section>
            </section >
        </>
    )
}
