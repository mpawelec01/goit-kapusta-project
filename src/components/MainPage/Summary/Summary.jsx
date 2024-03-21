import css from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>SUMMARY</p>
      <ul className={css.columns}>
        {/* <li className={css.row}>
          <p>NOVEMBER</p>
          <p>20 000.00</p>
        </li>
        <li className={css.row}>
          <p>JUNE</p>
          <p>500.00</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Summary;
