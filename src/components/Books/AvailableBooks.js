import Card from "../UI/Card";
import BookItem from "./BooksItem/BookItem";
import classes from "./AvailableBooks.module.css";

const DUMMY_BOOKS = [
  {
    id: "m1",
    name: "Turbulence And Triumph The Modi Years",
    description: "Rahul Agarwal, Bharathi S Pradhan",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Savarkar: Echoes from a Forgotten Past",
    description: "Vikram Sampath",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Obama-The Call of History",
    description: "Peter Baker",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Kashmiri’s Untold Story: Declassification",
    description: "Maroof Raza, Iqbal Chand Malhotra",
    price: 18.99,
  },
];

const AvailableBooks = () => {
  const bookslist = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className={classes.books}>
    <Card>
      <ul>{bookslist}</ul>
    </Card>
    </section>
  );
};

export default AvailableBooks;
