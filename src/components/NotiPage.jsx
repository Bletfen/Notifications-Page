import "./notipage.css";
import data from "../data.json";
export default function NotiPage() {
  return (
    <div className="notifications-container">
      <div className="notification-title-read-wrapper">
        <div className="notification-title">
          <h1>Notifications</h1>
          <div className="notification-numbers">3</div>
        </div>
        <div className="mark-all">
          <span className="mark-all-text">Mark all as read</span>
        </div>
      </div>
      {data.map((notification) => (
        <div className="notifications-wrapper" key={notification.id}>
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
              <span className="group-name">{notification.groupName}</span>
              <span className="post">{notification.post}</span>
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
          </div>
        </div>
      ))}
    </div>
  );
}
