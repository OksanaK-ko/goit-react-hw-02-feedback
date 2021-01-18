import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map(option =>
        < button type = 'button' key = { option.id } onClick = {() => onLeaveFeedback(option.id)}>{option.label}</button>
        )}
    </div> )
}
    
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;