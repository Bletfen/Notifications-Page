import "./notipage.css";
import rawData from "../data.json";
import { useState } from "react";
export default function NotiPage() {
  const [data, setData] = useState(rawData);
  const counter = data.filter((item) => !item.isRead).length;
  function readAll() {
    const updatedData = data.map((item) => ({
      ...item,
      isRead: true,
    }));
    setData(updatedData);
  }

  return (
    <div className="notifications-container">
      <div className="notification-title-read-wrapper">
        <div className="notification-title">
          <h1>Notifications</h1>
          {counter >= 1 ? (
            <div className="notification-numbers">{counter}</div>
          ) : (
            ""
          )}
        </div>
        <div className="mark-all">
          <span className="mark-all-text" onClick={readAll}>
            Mark all as read
          </span>
        </div>
      </div>
      {data.map((notification) => (
        <div
          className="notifications-wrapper"
          key={notification.id}
          onClick={() => {
            const updatedData = data.map((item) =>
              item.id === notification.id ? { ...item, isRead: true } : item
            );
            setData(updatedData);
          }}
        >
          <div
            className="not-img-text-wrapper"
            style={
              notification.isRead === false
                ? { backgroundColor: "#F7FAFD", borderRadius: "0.8rem" }
                : {}
            }
          >
            <div className="profile-img">
              <img src={notification.profilePic} alt="profile-pic" />
            </div>
            <div className="post-description">
              <span
                className={`user-name ${
                  notification.isRead === false ? "active" : ""
                }`}
              >
                {notification.username}
              </span>
              <span className="action">{notification.action}</span>
              {notification.groupName ? (
                <span className="group-name">{notification.groupName}</span>
              ) : (
                ""
              )}
              {notification.post ? (
                <span className="post">{notification.post}</span>
              ) : (
                ""
              )}
              {notification.isRead === false ? (
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#F65552" />
                </svg>
              ) : (
                ""
              )}
              <div className="time">
                <span className="time-text">{notification.time}</span>
              </div>
              {notification.text ? (
                <div className="message-wrapper">
                  <p className="message-text">
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            {notification.userPicture ? (
              <div className="user-profile">
                <img src={notification.userPicture} alt="user-picture"></img>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
