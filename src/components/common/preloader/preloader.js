import spin from '../../../Assets/images/spin.svg'
import styles from '../../Users/Users.module.css'

let Preloader = () => {
    return (
        <img className={styles.load} src={spin} />
    )
}

export default Preloader