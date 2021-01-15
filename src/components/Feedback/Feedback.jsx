import React from 'react';

class Feedback extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    goodFeedback = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    }
    neutralFeedback = () => {
          this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    }
    badFeedback = () => {
           this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    }

    render() {
        return (
            <div classsName="Feedback">
                <p className="Feedback-text">Please leave feedback</p>
                <div className="Feedback-control">
                    <button type="button" onClick={this.goodFeedback}>Good</button>
                    <button type="button" onClick={this.neutralFeedback}>Neutral</button>
                    <button type="button" onClick={this.badFeedback}>Bad</button>
                </div>
                <div className="Statistics-value">
                <p className="Statistics">Statistics</p>
                    <span className="Good-value">Good: {this.state.good}</span>
                <span className="Neutral-value">Neutral: {this.state.neutral}: </span>
                <span className="Bad-value">Bad: {this.state.bad} </span>
                </div>
            </div>
        )
    }
}
export default Feedback; 












