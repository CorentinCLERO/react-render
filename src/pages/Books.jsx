  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";

  function Books() {
    const array = Array.from({ length: 100 }, (v, i) => i + 1);
    const [books, setBooks] = useState([])
    const [criteria, setCriteria] = useState("")
    const navigate = useNavigate()

    const booksFiltered = criteria ? books.filter(book => book.name.toLowerCase().includes(criteria.toLowerCase())) : books

    useEffect(() => {
      fetch('https://book-node-mongoose-render.onrender.com/api/books')
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch((error) => {
          console.log('error', error);
        });
    }, []);

    return (
      <div>
        <input
          className="form-contol"
          placeholder="rechercher"
          value={criteria}
          onChange={e => setCriteria(e.target.value)}
        />
        <ul className="list-group list-group-flush">
          {booksFiltered?.map((book) => (
            <>
              <li key={book.id} onClick={() => navigate(`/book/${book._id}`)} className="list-group-item">Titre: {book.name}</li>
            </>
          ))}
        </ul>
        <ul>
          {array.map((number) => {
            if (number % 5 === 0) return <li key={number}>{number}</li>;
          })}
        </ul>
      </div>
    );
  }

  export default Books;
