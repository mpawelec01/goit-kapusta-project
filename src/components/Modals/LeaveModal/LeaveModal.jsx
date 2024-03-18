import css from './LeaveModal.module.css';

export const LeaveModal = () => {
    return (
        <section className={css.leaveModal}>
            <span className={css.closeModal}>X</span>
            <div className={css.container}>
                <p>Do you really wanna leave?</p>
                <div className={css.buttonList}>
                    <button className={css.buttonYes}>YES</button>
                    <button className={css.buttonNo}>NO</button>
                </div>
            </div>
        </section>
    )
}