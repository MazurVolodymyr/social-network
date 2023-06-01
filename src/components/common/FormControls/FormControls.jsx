import React from "react"
import style from "./FormControls.module.css"

//  ({}) це рест оператор
export const Textarea = ({input,meta, ...props}) =>{

    const hasError = meta.touched && meta.error

    return(
        <div className={style.formcontrol + " " + (hasError ? style.error : "")}>
            <div>
               <textarea {...input} {...props}></textarea>
            </div>
            <div>
                {meta.touched && meta.error &&<span>{meta.error}</span> }
            </div>
        </div>
    )
}

