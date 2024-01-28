import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const AbandonedCourseNotification = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const socket = io('https://civil-guruji-hzoz.onrender.com', {
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      transports: ['websocket'], // explicitly enable websocket transport
    });

    socket.on('inactiveUsersNotification', (data) => {
      setNotification(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const printFun = () => {
    if (notification && notification.userId === String(user._id)) {
      console.log(notification.message)
      
      return notification.message;
    }
    return null; // Return null if the condition is not met
  };

  return (
    <div>
      {notification && (
        <div className="notification">
          <p>{printFun()}</p>
        </div>
      )}
    </div>
  );
};

export default AbandonedCourseNotification;
