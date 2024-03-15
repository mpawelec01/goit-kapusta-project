import css from "./ProductForm.module.css";
import Icon from "../../Icon/Icon";
import Today from "../../Today/Today";

const ProductForm = () => {
  return (
    <>
      <Icon className={css.arrow} iconName="arrow_left" />
      <form className={css.form}>
        <div className={css.tabletView}>
          <div className={css.today}>
            <Today />
          </div>
          <div className={css.formInputs}>
            <div className={css.bothWrapper}>
              <div className={css.inputWrapper}>
                <label className={css.label} htmlFor="productName">
                  Product description
                </label>
                <input
                  type="text"
                  name="description"
                  className={css.input}
                  id="productName"
                  required
                />
              </div>
              <div className={css.selectWrapper}>
                <select
                  name="category"
                  id="category-select"
                  required
                  defaultValue="default"
                  className={css.input}
                >
                  <option value="default" hidden>
                    Product category
                  </option>
                  <option value="transport">Transport</option>
                  <option value="products">Products</option>
                  <option value="health">Health</option>
                  <option value="alcohol">Alcohol</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="housing">Housing</option>
                  <option value="technique">Technique</option>
                  <option value="communication">Communal, communication</option>
                  <option value="hobbies">Sports, hobbies</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={css.flexWrapper}>
              <div className={css.sumWrapper}>
                <input
                  type="number"
                  name="sum"
                  className={css.sumInput}
                  required
                  step="0.10"
                  placeholder="0.00"
                />
                <span className={css.currency}>UAH</span>
              </div>
              <div className={css.iconWrapper}>
                <Icon className={css.icon} iconName="calculator" />
              </div>
            </div>
          </div>
        </div>

        <div className={css.buttons}>
          <button className={css.btn}>INPUT</button>
          <button className={css.btn}>CLEAR</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
