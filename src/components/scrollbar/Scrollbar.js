import React from "react"
import * as styles from "./Scrollbar.module.css"
const Scrollbar = ({currentRef }) => {
    const scroll = (scrollOffset) => {
        const w =  currentRef.current.scrollWidth - currentRef.current.offsetWidth 
       
        currentRef.current.scrollBy({
            left: scrollOffset * w,
            behavior: 'smooth'
          }
      )}
    return (
    <div className={styles.ScrollContainer}>
        <button className={styles.ScrollControl + " " + styles.Left}  onClick={e => scroll(-.2)} />
        <button className={styles.ScrollControl  + " " + styles.Right} onClick={e => scroll(.2)}/>
    </div>
    )
}

export default Scrollbar