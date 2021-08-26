import PropTypes from 'prop-types'
import s from './title.module.css'
const Title = ({ text }) => {
    return (
        <h2 className={s.title}>{text}</h2>
    )
}

Title.propTypes = {
    text: PropTypes.string,
}

export default Title