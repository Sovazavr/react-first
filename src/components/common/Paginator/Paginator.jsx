import styles from './Pagi.module.css'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import cn from 'classnames'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={styles.page}>

            {
                portionNumber > 1 && 
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}><SkipPreviousIcon/></button>
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(
                    (p) => {
                        return <span className={cn({
                            [styles.selectedPage]: currentPage === p
                        }, styles.pageNumber)} key={p}
                            onClick={(e) => { onPageChanged(p); }}>{p}</span>
                    }
                )
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}><SkipNextIcon/></button>
            }
        </div>
    )
}

export default Paginator