import React from "react"
import * as styles from "./Carousel.module.css"
import Scrollbar from "../scrollbar/Scrollbar"
const Carousel = ({children, currentRef,idx}) =>{
    return(
        <>
        <div className={"ScrollbarContainer "+ styles.Carousel}  ref={currentRef}> 
        {children}
        </div>
        <Scrollbar currentRef={currentRef} idx={idx}/>
        </>
    )
}

export default Carousel