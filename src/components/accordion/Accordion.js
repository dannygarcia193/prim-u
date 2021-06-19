import React from "react"
import * as styles from "./Accordion.module.css"
const questions = [
    "How does Prim-u work?","How should I get ready for a hair-cut appointment?",
    "How do you differ from other on-demand beauty companies?","Should I do anything to my skin before a make-up service?",
    "Are your prices affordable?","How should I prepare for strip and band eyelashes?",
    "Is there anything I'll need to have for my appointment or does the professional Primlancer provide her or his own equipment and products?",
    "Is it OK if I want the stylist or makeup artist to use some of my personal products?",
    "How do I know I can trust Prim-U professionals in my home?",
    "For up-dos, braids, twist, knots, and locks should I do anything to my hair before the services?"
]
const questions2 = [
    "How does Prim-u work?","How should I get ready for a hair-cut appointment?",
    "How do you differ from other on-demand beauty companies?","Should I do anything to my skin before a make-up service?",
    "Are your prices affordable?","How should I prepare for strip and band eyelashes?",
    "Is there anything I'll need to have for my appointment or does the professional Primlancer provide her or his own equipment and products?",
    "Is it OK if I want the stylist or makeup artist to use some of my personal products?",
    "How do I know I can trust Prim-U professionals in my home?","For up-dos, braids, twist, knots, and locks should I do anything to my hair before the services?"

]
const answers =[
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls.",
    "The details element represents a disclosure widget from which the user can obtain additional information or controls."
]
const Accordion = ({questions, answers}) => {
    const faq = questions.map( (question,idx) => {
        return (
        <details key={idx} className={styles.QAContainer}>
            <summary className={styles.Question}>{question}</summary>
            <p className={styles.Answer}>{answers[idx]}</p>
        </details>
        )
    })
    return <div>{faq}</div>
}
const Heading=  ({heading}) =>{
    return(
    <div className={styles.Heading}>
        <h2 className={styles.SectionName}>{heading}</h2><div className={styles.Underline}/>
    </div>
    )
}
const FAQ = () => {
    return(
        <div className={styles.MainContainer}>
            <Heading heading={"for customers"}/>
            <Accordion questions={questions} answers={answers}/>
            <button className={styles.ShowMore}><span className={styles.BtnText}>show more</span></button>
        </div>
    )
}
export const FAQ2 = () =>{
    return(
    <div className={styles.MainContainer}>
        <Heading heading={"for Partners"}/>
        <Accordion questions={questions2} answers={answers}/>
        <button className={styles.ShowMore} style={{marginBottom: 0}}><span className={styles.BtnText}>show more</span></button>
    </div>      
    )
}
export default FAQ