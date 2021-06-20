import React from "react"
import * as styles from "./Carousel.module.css"
import Scrollbar from "../scrollbar/Scrollbar"
const Carousel = ({children, currentRef}) =>{
    return(
        <>
        <div className={"ScrollbarContainer" + " "+ styles.Carousel}  ref={currentRef}> 
        {children}
        </div>
        <Scrollbar currentRef={currentRef}/>
        </>
    )
}

export default Carousel