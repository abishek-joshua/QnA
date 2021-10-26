import React from 'react';
import './Profile.css';

const initialState = { user: {} };

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialState);
    }
    componentDidMount = () => {
        this.fetchUserDetails();
    }
    fetchUserDetails = () => {

        fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: this.props.roll_number
            })
        })
            .then(res => res.json())
            .then(res => this.setState({ user: res }))
            .catch(console.log)
    }
    onClickUpdate = () => {
        var email = document.getElementById('email-box').value;
        var user_name = document.getElementById('user-name-box').value;
        var about_me = document.getElementById('about-me-box').value;
        fetch('http://localhost:3000/profile-update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: this.props.roll_number,
                email: email,
                user_name: user_name,
                about_me: about_me
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res === "success") {
                    this.fetchUserDetails();
                }
                else {
                    alert("profile cannot be updated")
                }
            })
            .catch(console.log)
        this.fetchUserDetails();
    }

    render() {
        return (
            <div className="profile">
                <div className="profile-box">
                    <label htmlFor="roll-number-box">Roll Number</label>
                    <input
                        id="roll-number-box"
                        type="text"
                        value={this.state.user.roll_number}
                        disabled="disabled"
                    >
                    </input>

                    <label htmlFor="email-box">Email</label>
                    <input
                        id="email-box"
                        type="email"
                        placeholder={this.state.user.email}
                    >
                    </input>

                    <label htmlFor="user-name-box">Username</label>
                    <input
                        id="user-name-box"
                        type="text"
                        placeholder={this.state.user.user_name}
                    >
                    </input>
                    <label htmlFor="about-me-box">About Me</label>
                    <textarea
                        id="about-me-box"
                        rows="5"
                        cols="25"
                        placeholder={this.state.user.about_me}
                    />
                </div>

                <button className="submit-button" onClick={this.onClickUpdate}>
                    update
                </button>

            </div>
        );
    }
}

export default Profile;