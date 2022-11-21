import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Amazing Books, Delivered To You</h2>
      <p>
        Choose your favorite book from our collection of available books
        and enjoy a wonderful experience.
      </p>
      <p>
        All our books are famous ones written by professional writers!
      </p>
    </section>
  );
};

export default BooksSummary;