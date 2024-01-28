import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const InactiveUsersNotification = () => {
  const [notification, setNotification] = useState(null);
  const user= JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    const socket = io('http://localhost:3001', {
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      transports: ['websocket'], 
    });

    socket.on('inactiveUsersNotification', (data) => {
      setNotification(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const printFun= ()=>{
    if(notification.userId===user._id){
      console.log(notification.message)
       return notification.message
    }
  } 
  return (
    <div>
      {notification && (
        <div className="notification">
          <p>{printFun}</p>
        </div>
      )}
    </div>
  );
};

export default InactiveUsersNotification;
