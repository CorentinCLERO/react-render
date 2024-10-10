import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const {id} = useParams()
  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`https://book-node-mongoose-render.onrender.com/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch((error) => {
        console.log('error', error);
      });
  }, [id]);

  console.log(book)

  return (
    <div>
      { book ?
      <div className="d-flex justify-content-center">
      <div className="card" style={{width: "18rem", marginTop: '50px'}}>
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.description}</p>
        </div>
      </div>
      </div> :
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      }
    </div>
  );
}

export default BookDetails;