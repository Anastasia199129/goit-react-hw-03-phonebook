import PropTypes from 'prop-types'
import style from './button.module.css'

const Button = ({ text, onClick }) => {
    return (
        <button className={style.button} type="button" onClick={onClick}>{text}</button>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button