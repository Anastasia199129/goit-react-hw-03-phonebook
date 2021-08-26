import PropTypes from 'prop-types'
import s from './filter.module.css'

const Filter = ({onChange, value})=>{

    return(  
        <label className={s.label} htmlFor=""> Find contacts by name
            <input className={s.input} type="text" value={value} onChange={onChange} placeholder="Find"/>
    </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default Filter