import React from "react"
import * as styles from "./Scrollbar.module.css"
const Scrollbar = ({currentRef, idx }) => {
    function scroll(scrollOffset) {
        const disableLeft  = currentRef.current.scrollLeft === 0 && scrollOffset < 0
        const disableRight = currentRef.current.scrollLeft + currentRef.current.offsetWidth >= currentRef.current.scrollWidth && scrollOffset > 0
        console.log(disableLeft,disableRight)
        if(disableLeft) document.getElementById(idx).getElementsByClassName(styles.Left)[0].disabled = true;
        else{
            document.getElementById(idx).getElementsByClassName(styles.Left)[0].disabled = false;
        }
        if(disableRight) document.getElementById(idx).getElementsByClassName(styles.Right)[0].disabled = true;
        else{
            document.getElementById(idx).getElementsByClassName(styles.Right)[0].disabled = false;
        }

        const w =  currentRef.current.scrollWidth - currentRef.current.offsetWidth 
        console.log(scrollOffset * w, w,currentRef.current.scrollLeft, currentRef.current.offsetWidth, currentRef.current.scrollWidth)
        currentRef.current.scrollBy({
            left: scrollOffset * w,
            behavior: 'smooth'
        })
    }
     
    return (
    <div className={styles.ScrollContainer} id={idx}>
        <button  className={styles.ScrollControl + " " + styles.Left}  onClick={e => scroll(-.2)} />
        <button  className={styles.ScrollControl  + " " + styles.Right} onClick={e => scroll(.2)}/>
    </div>
    )
}

export default Scrollbar