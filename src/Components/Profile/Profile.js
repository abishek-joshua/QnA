import React from 'react';
import './Profile.css';
class Profile extends React.Component {

    onClickUpdate = () => {
        var email = document.getElementById('email-box').value;
        var user_name = document.getElementById('user-name-box').value;
        var about_me = document.getElementById('about-me-box').value;
        fetch('http://localhost:3000/profile-update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: this.props.user.roll_number,
                email: email,
                user_name: user_name,
                about_me: about_me
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res === "profile updated") {
                    console.log(res);
                }
                else {
                    alert("profile cannot be updated")
                }
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="profile">
                <div className="profile-box">
                    <label htmlFor="roll-number-box">Roll Number</label>
                    <input
                        id="roll-number-box"
                        type="text"
                        value={this.props.user.roll_number}
                        disabled="disabled"
                    >
                    </input>

                    <label htmlFor="email-box">Email</label>
                    <input
                        id="email-box"
                        type="email"
                        placeholder={this.props.user.email}>
                    </input>

                    <label htmlFor="user-name-box">Username</label>
                    <input
                        id="user-name-box"
                        type="text"
                        placeholder={this.props.user.user_name}>
                    </input>
                    <label htmlFor="about-me-box">About Me</label>
                    <textarea id="about-me-box" rows="5" cols="25" placeholder={this.props.user.about_me} />
                </div>

                <button className="submit-button" onClick={this.onClickUpdate}>
                    update
                </button>

            </div>
        );
    }
}

export default Profile;