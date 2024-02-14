import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'


export default function QOTD() {
    
    const [ quote, setQuote ] = useState('')
    const [author, setAuthor] = useState("")

    useEffect(() => {
        fetch("http://api.quotable.io/random")
          .then(res => res.json())
          .then(
            (quote) => {
              setQuote(quote.content);  
              setAuthor(quote.author);
            }
          )
      },[]);

    
      let getRandomQuote = () => {
        fetch("http://api.quotable.io/random")
          .then(res => res.json())
          .then(
            (quote) => {
              setQuote(quote.content);  
              setAuthor(quote.author);
            }
          )
      }


  return (
    <Container id='qotd'>
        <h1 className='mindset'>Mindset is Everything</h1>
        <p className='quote'> {quote} </p>
        <p className='author'>~ {author}</p>
        <button id='inspirebutton' onClick={getRandomQuote}>Inspire Me!</button>
    </Container>
  )

}



