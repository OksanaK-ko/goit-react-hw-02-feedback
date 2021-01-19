import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css'

const Statistics = ({ options, data, total, positivePercentage }) => {
    return (
        <section className="Statistics">
            {total > 0 ?
                <ul className={s.list}>
                    {options.map(option => <li key={option.id}>{`${option.label}: ${data[option.id]}`}</li>)}
                    <li>Total: {total}</li>
                    <li>Positive feedbacks: {positivePercentage}%</li>
                </ul>: 
              <Notification/>}      
            </section> 
              
    )
}
Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.object.isRequired,
    total: PropTypes.number,
    countPositiveFeedbackPercentage: PropTypes.number
}
export default Statistics;