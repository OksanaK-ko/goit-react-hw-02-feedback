import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Stastics/Statistics';
import Section from '../Section/Section';
import options from '../data/data';
 

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
    handleFeedback = (option) => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1
        }));
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, item) => (acc+item), 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good = 0 } = this.state
        const total = this.countTotalFeedback()
        const percentage = Math.round((good) * 100 / total);
        return percentage>=0? percentage: 0
    }

    render() {
            
        return (
            <div>
            <Section title="Please leave feedback">
                    <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.handleFeedback}
                />
           </Section>
            <Section title="Statistics">
                <Statistics
                    options={options}
                    data={this.state}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </Section>
            </div>
        );
    }
}

    export default Feedback;
   
 

