import React from "react";
import styles from "./ReportExpenses.module.css"
import icons from "../../img/icons.svg";
export const ReportExpenses = ({toggleShowIncome}) => {
return (
  <div>
    <div className={styles.box}>
      <div className={styles.listOfExpenses}>
        <svg
          className={styles.vectorLeft}
          width={7}
          height={12}
          onClick={toggleShowIncome}>
          <use href={`${icons}#icon-vector_left`}></use>
        </svg>
        <p className={styles.listOfExpenses_header}>Expenses</p>
        <svg
          className={styles.vectorLeft}
          width={7}
          height={12}
          onClick={toggleShowIncome}>
          <use href={`${icons}#icon-vector_right`}></use>
        </svg>
      </div>
      <ul className={styles.listOfExpenses_list}>
        <li className={styles.listOfExpenses_list_item}>
          <p>5 000.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-products`}></use>
          </svg>
          <p>Products</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>3 000.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-alcohol`}></use>
          </svg>
          <p>Alcohol</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>2 400.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-entertainment`}></use>
          </svg>
          <p>Entertainment</p>
        </li>
        <div className={styles.listOfExpenses_line}></div>
        <li className={styles.listOfExpenses_list_item}>
          <p>2 220.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-health`}></use>
          </svg>
          <p>Health</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>2 000.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-transport`}></use>
          </svg>
          <p>Transport</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>1 800.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-housing`}></use>
          </svg>
          <p>Housing</p>
        </li>
        <div className={styles.listOfExpenses_line}></div>
        <li className={styles.listOfExpenses_list_item}>
          <p>1 500.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-technique`}></use>
          </svg>
          <p>Technique</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>900.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-communication`}></use>
          </svg>
          <p>Communal, Communication</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>800.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-hobbies`}></use>
          </svg>
          <p>Sports, Hobbies</p>
        </li>
        <div className={styles.listOfExpenses_line}></div>
        <li className={styles.listOfExpenses_list_item}>
          <p>800.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-education`}></use>
          </svg>
          <p>Education</p>
        </li>
        <li className={styles.listOfExpenses_list_item}>
          <p>200.00</p>
          <svg className={styles.iconSvg} width={56} height={56}>
            <use href={`${icons}#icon-other`}></use>
          </svg>
          <p>Other</p>
        </li>
        <div className={styles.listOfExpenses_line}></div>
      </ul>
    </div>
    <div className={styles.diagram}>
      <ul className={styles.diagram_list}>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Pork</p>
          <p className={styles.diagram_list_item_value}>1000 UAH</p>
          <div className={styles.diagram_list_item_chart_1}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Beef</p>
          <p className={styles.diagram_list_item_value}>1000 UAH</p>
          <div className={styles.diagram_list_item_chart_2}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Chicken</p>
          <p className={styles.diagram_list_item_value}>600 UAH</p>
          <div className={styles.diagram_list_item_chart_3}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Fish</p>
          <p className={styles.diagram_list_item_value}>800 UAH</p>
          <div className={styles.diagram_list_item_chart_4}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Panini</p>
          <p className={styles.diagram_list_item_value}>220 UAH</p>
          <div className={styles.diagram_list_item_chart_5}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Coffee</p>
          <p className={styles.diagram_list_item_value}>350 UAH</p>
          <div className={styles.diagram_list_item_chart_6}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Spaghetti</p>
          <p className={styles.diagram_list_item_value}>230 UAH</p>
          <div className={styles.diagram_list_item_chart_7}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Chocolate</p>
          <p className={styles.diagram_list_item_value}>200 UAH</p>
          <div className={styles.diagram_list_item_chart_8}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Olives</p>
          <p className={styles.diagram_list_item_value}>300 UAH</p>
          <div className={styles.diagram_list_item_chart_9}></div>
        </li>
        <li className={styles.diagram_list_item}>
          <p className={styles.diagram_list_item_header}>Greens</p>
          <p className={styles.diagram_list_item_value}>300 UAH</p>
          <div className={styles.diagram_list_item_chart_10}></div>
        </li>
      </ul>
    </div>
  </div>
);
}