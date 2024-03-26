import React from "react";
import styles from "./ReportExpenses.module.css";
import icons from "../../img/icons.svg";
export const ReportExpenses = ({
  toggleShowIncome,
  currentIndex,
  filteredExpensesTransactions,
  getTransactionsByCategory,
  getTotalAmountOfCurrentCategory,
}) => {
  const productsExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Products"
  );
  const alcoholExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Alcohol"
  );
  const entertainmentExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Entertainment"
  );
  const healthExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Health"
  );
  const transportExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Transport"
  );
  const housingExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Housing"
  );
  const techniqueExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Technique"
  );
  const communalExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Communal, communication"
  );
  const hobbiesExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Sports, hobbies"
  );
  const educationExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Education"
  );
  const otherExpenses = getTransactionsByCategory(
    filteredExpensesTransactions,
    currentIndex,
    "Other"
  );
  const totalProducts = getTotalAmountOfCurrentCategory(productsExpenses);
  const totalAlcohol = getTotalAmountOfCurrentCategory(alcoholExpenses);
  const totalEntertainment = getTotalAmountOfCurrentCategory(
    entertainmentExpenses
  );
  const totalHealth = getTotalAmountOfCurrentCategory(healthExpenses);
  const totalTransport = getTotalAmountOfCurrentCategory(transportExpenses);
  const totalHousing = getTotalAmountOfCurrentCategory(housingExpenses);
  const totalTechnique = getTotalAmountOfCurrentCategory(techniqueExpenses);
  const totalCommunal = getTotalAmountOfCurrentCategory(communalExpenses);
  const totalHobbies = getTotalAmountOfCurrentCategory(hobbiesExpenses);
  const totalEducation = getTotalAmountOfCurrentCategory(educationExpenses);
  const totalOther = getTotalAmountOfCurrentCategory(otherExpenses);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.listOfExpenses}>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}
          >
            <use href={`${icons}#icon-vector_left`}></use>
          </svg>
          <p className={styles.listOfExpenses_header}>Expenses</p>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}
          >
            <use href={`${icons}#icon-vector_right`}></use>
          </svg>
        </div>
        <ul className={styles.listOfExpenses_list}>
          {productsExpenses && productsExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalProducts}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-products`}></use>
              </svg>
              <p>Products</p>
            </li>
          ) : (
            <li></li>
          )}
          {alcoholExpenses && alcoholExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalAlcohol}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-alcohol`}></use>
              </svg>
              <p>Alcohol</p>
            </li>
          ) : (
            <li></li>
          )}
          {entertainmentExpenses && entertainmentExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalEntertainment}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-entertainment`}></use>
              </svg>
              <p>Entertainment</p>
            </li>
          ) : (
            <li></li>
          )}
          {healthExpenses && healthExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalHealth}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-health`}></use>
              </svg>
              <p>Health</p>
            </li>
          ) : (
            <li></li>
          )}
          {transportExpenses && transportExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalTransport}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-transport`}></use>
              </svg>
              <p>Transport</p>
            </li>
          ) : (
            <li></li>
          )}
          {housingExpenses && housingExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalHousing}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-housing`}></use>
              </svg>
              <p>Housing</p>
            </li>
          ) : (
            <li></li>
          )}
          {techniqueExpenses && techniqueExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalTechnique}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-technique`}></use>
              </svg>
              <p>Technique</p>
            </li>
          ) : (
            <li></li>
          )}
          {communalExpenses && communalExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalCommunal}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-communication`}></use>
              </svg>
              <p>Communal, Communication</p>
            </li>
          ) : (
            <li></li>
          )}
          {hobbiesExpenses && hobbiesExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalHobbies}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-hobbies`}></use>
              </svg>
              <p>Sports, Hobbies</p>
            </li>
          ) : (
            <li></li>
          )}
          {educationExpenses && educationExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalEducation}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-education`}></use>
              </svg>
              <p>Education</p>
            </li>
          ) : (
            <li></li>
          )}
          {otherExpenses && otherExpenses.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalOther}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-other`}></use>
              </svg>
              <p>Other</p>
            </li>
          ) : (
            <li></li>
          )}
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
};
