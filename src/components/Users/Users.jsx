import userPhoto from "../../images/Users_photo_default/user.png"
import style from "./Users.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) =>{
    // в циклі for поставив значення 9 (було pagesOfCount ) тому що зараз дуже багато користувачиі, десятки тисяч і їх не зручно виводити на екран
    // let pagesOfCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for(let i = 1; i <= 20; i++){
        pages.push(i);
    }




    return (
        <div>
        <div>
            {pages.map( p=> { 
                return  <span className={props.currentPage === p && style.selectedPage } onClick={()=>{
                    props.onPageChanged(p)
                }}>{p}
                </span>
                })
            }
        </div>
            {
                props.users.map( u =>
                    <div key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="error" />
                            </NavLink>
                            <div>
                                {u.followed 
                                ? <button onClick={ ()=> {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "60f7b53c-22ea-444c-89fb-caf8fbd7b173"}}  ).then(response=>{
                                        if (response.data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }
                                    })
                                    
       
                                    }}>unfollow</button>
                                : <button onClick={ ()=> {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "60f7b53c-22ea-444c-89fb-caf8fbd7b173"}}).then(response=>{
                                        if (response.data.resultCode === 0){
                                            props.follow(u.id)
                                        }
                                    })
    
                                    }}>follow</button> }
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )
                
                }
        </div>
        
    )
}

export default Users