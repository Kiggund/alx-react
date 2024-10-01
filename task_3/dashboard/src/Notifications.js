import React from 'react';
import './Notification.css';
import { getLatestNotification } from './utils';

function Notifications() {
    const handleButtonClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={handleButtonClick}
            >
                <img src="close-icon.png" alt="Close icon" />
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}

export default Notifications;