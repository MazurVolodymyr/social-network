import style from './ProfileStatus.module.scss'
import React, { useEffect, useState } from 'react'


const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( ()=>{
        
    }) 

    const activateEditMode = () =>{
        setEditMode(true)
    }
    const deactivateEditMode = () =>{
        setEditMode(false)
        // props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
        { !editMode &&
            <div>
                <span  onDoubleClick={activateEditMode}> {props.status || "my status"}</span> 
            </div>
        }
        { editMode &&
            <div>
                <input onChange={ onStatusChange } autoFocus={true} onBlur={deactivateEditMode} value={ status } className={style.statusInput}/>
            </div>
        }
        </div>
        

    )
}

export default ProfileStatusHook