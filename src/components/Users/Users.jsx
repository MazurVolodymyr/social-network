import React from "react";

const Users = (props) =>{

    if(props.users.length === 0){
        props.setUsers([{ id: 1, photo:'https://www.meme-arsenal.com/memes/45e78ffa8f0efea3877610964d02d3fd.jpg' , followed: false, fullName: 'Vova', status: 'Hey everyone', location: {city: 'Vinnytsia', country: 'Ukraine'} },
        { id: 2, photo:'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec' , followed: true, fullName: 'Bogdan', status: 'I am f**k u', location: {city: 'Vinnytsia', country: 'Ukraine'} },
        { id: 3, photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTUZCcgPK-Gxyo5qkD8tgQi9hxSLyQnm5xQi6bv6UY6fu9BZBgLq-SEUEEy0-hUoT4Xo&usqp=CAU' , followed: true, fullName: 'Oleksandr', status: 'PIVO, VODKA, EBAT POGODKA', location: {city: 'Vinnytsia', country: 'Ukraine'} }
            ]
        )
    }


    return(
        <div>
            {
                props.users.map( u =>
                    <div key={u.id}>
                        <div>
                            <img src={u.photo} alt="" />
                            <div>
                                {u.followed 
                                ? <button onClick={ ()=> {props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick={ ()=> {props.follow(u.id)}}>follow</button> }
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
                
                }
        </div>
        
    )
}

export default Users