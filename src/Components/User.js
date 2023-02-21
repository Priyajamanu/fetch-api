import React from 'react'
import UserItem from './UserItem';

const Users = ({personData}) => {
    return (
        <div className="usergrid">
            {personData.map((user) =><UserItem key={ user.id}  user={user} />)}
        </div>
    )
}

export default Users;