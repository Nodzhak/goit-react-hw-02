import styles from './Feedback.module.css'

export default function Feedback ({ feedbackTypes, totalFeedback, sumTotalFeedback }) {
    return(
        <ul className={styles.list}>
        <li className={styles.item}>
            <p>Good:{feedbackTypes.good}</p>
            <p>Neutral:{feedbackTypes.neutral}</p>
            <p>Bad:{feedbackTypes.bad}</p>
            <p>Total:{totalFeedback}</p>
            <p>Positive:{sumTotalFeedback}</p>
        </li>
        </ul>
    )
}