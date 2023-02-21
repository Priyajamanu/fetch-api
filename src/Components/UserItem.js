import React from 'react'

const UserItem = ({ user }) => {
    return (
        <div className="content">
            <div class="card-container">
                <div class="upper-container">
                    <div class="image-container">
                        <img src={user.avatar} alt="Profile img" />
                    </div>
                </div>
            </div>
            <div class="lower-container">
                <div>
                    <h4 className="name">{`${user.first_name} ${user.last_name}`}</h4>
                    <p className="email">{`${user.email}`}</p>
                </div>
            </div>
        </div>
    )
}
export default UserItem;