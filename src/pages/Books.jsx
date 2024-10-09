function Books() {
  const array = Array.from({ length: 100 }, (v, i) => i + 1);

  const books = [
    {
      id: 1,
      name: 'Livre 1'
    },
    {
      id: 2,
      name: 'Livre 2'
    },
    {
      id: 3,
      name: 'Livre 3'
    }
  ];

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>Titre: {book.name}</li>
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
