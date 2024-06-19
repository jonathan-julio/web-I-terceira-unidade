// components/UserCheckboxList.js
import React from 'react';

const UserCheckboxList = ({ users, selectedUsers, handleCheckboxChange }) => (
    <div className="form-check" id="users-container">
        {users.map((user) => (
            <div key={user.id}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={user.id}
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                    disabled={user.login === localStorage.login}
                />
                <label className="form-check-label d-flex justify-content-start">{user.login}</label>
            </div>
        ))}
    </div>
);

export default UserCheckboxList;
