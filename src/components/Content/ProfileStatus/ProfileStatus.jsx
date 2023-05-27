import style from './ProfileStatus.module.scss'
import React from 'react'
class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render (){
        return(
            <div>
            { !this.state.editMode && 
                <div>
                    <span className={style.input} onDoubleClick={ this.activateEditMode }> {this.props.status} hey click me double</span> 
                </div>
            } 

            { this.state.editMode && 
                <div>
                    <input value={this.props.status} className={style.input}  onBlur={this.deactivateEditMode} autoFocus={true}  />
                </div>
            }

            </div>

        )
    }
}

export default ProfileStatus