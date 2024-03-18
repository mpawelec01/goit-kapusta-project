import css from './SureModal.module.css';

export const SureModal = () => {
    return (
        <section className={css.sureModal}>
            <span className={css.closeModal}>X</span>
            <div className={css.container}>
                <p>Are you sure?</p>
                <div className={css.buttonList}>
                    <button className={css.buttonYes}>YES</button>
                    <button className={css.buttonNo}>NO</button>
                </div>
            </div>
        </section>
    )
}