import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../images/profileImg.png'

const ProfilePage = () => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <div>
            <div className="profile-container">
                <div className="buttons-container">
                    <button className="button">Logout</button>
                    <button className="button">Edit image</button>
                    <button className="button"><Link to="/cart" style={{ color: "black" }}>Cart</Link></button>
                </div>
                <div className="img-container">
                    <img src={img} />
                </div>
                <h1>{userInfo.name}</h1>
            </div>
        </div>
    )

}
export default ProfilePage;
