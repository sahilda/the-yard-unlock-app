import React, { Component } from 'react';
import './OpenDoorButton.css';

class OpenDoorButton extends Component {
  openDoorOnClick = () => {
    const { door } = this.props;

    const data = new URLSearchParams();
    data.append('auth_token', 'ea99a19b0c54d469f3472cb17a49442f24088313cd070419366e953abcebed17');

    fetch('https://members.theyard.com/api/app/locks/' + door, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      alert(res.message)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    const { link } = this.props;

    return (
      <div className="Button" onClick={() => this.openDoorOnClick()}>{link}</div>
    );
  }
}

export default OpenDoorButton;