import { useState } from 'react';
import Section from './Components/Section/Section';
import FeedbackCounter from './Components/FeedbackCounter';
import StaticticList from './Components/StatisticList';

function App() {
    const [good, setGoodRating] = useState(0);
    const [neutral, setNeutralRating] = useState(0);
    const [bad, setBadRating] = useState(0);

    const total = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((100 / total()) * good);
    };

    const handlerClickOnRate = e => {
        const { name } = e.target;
        if (name === 'good') setGoodRating(good + 1);
        if (name === 'neutral') setNeutralRating(neutral + 1);
        if (name === 'bad') setBadRating(bad + 1);
        return;
    };

    const feedbackOptions = ['good', 'neutral', 'bad'];
    const options = { good, neutral, bad };

    return (
        <>
            <Section title="Please leave your feedback">
                <FeedbackCounter
                    handlerClickOnRate={handlerClickOnRate}
                    options={feedbackOptions}
                />
            </Section>
            <Section title={total() > 0 ? 'Statistics' : 'No feedback given'}>
                {total() > 0 ? (
                    <StaticticList
                        options={options}
                        positive={countPositiveFeedbackPercentage()}
                        total={total()}
                    />
                ) : null}
            </Section>
        </>
    );
}

export default App;
