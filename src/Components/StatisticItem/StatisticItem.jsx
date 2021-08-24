import styles from './StatisticItem.module.css';

const StatisticItem = ({ option, value, id }) => {
    return (
        <li className={styles.statisticItem} key={id}>
            <span>
                {option}: {value}
            </span>
        </li>
    );
};

export default StatisticItem;
