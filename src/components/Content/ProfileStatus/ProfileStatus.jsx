import style from './ProfileStatus.module.scss'
import React from 'react'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status ){
            this.setState({
                status: this.props.status
            })
        }
    }

    render (){
        return(
            <div>
            { !this.state.editMode && 
                <div>
                    <span className={style.input} onDoubleClick={ this.activateEditMode }> {this.props.status || "------"}</span> 
                </div>
            } 

            { this.state.editMode && 
                <div>
                    <input onChange={this.onStatusChange} value={this.state.status} className={style.input}  onBlur={this.deactivateEditMode} autoFocus={true}  />
                </div>
            }
            </div>

        )
    }
}

export default ProfileStatus