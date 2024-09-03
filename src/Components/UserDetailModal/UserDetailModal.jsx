import "./UserDetailModal.css";

const UserDetailModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>User Details</h2>
        <p>
          <strong>Name:</strong> {user.first} {user.middle} {user.last}
        </p>
        <p>
          <strong>Landmark:</strong> {user.landmark}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Contact:</strong> {user.contact}
        </p>
        <p>
          <strong>About:</strong> {user.aboutus}
        </p>
        {user.otherLinks && user.otherLinks.length > 0 && (
          <div>
            <strong>Other Links:</strong>
            <ul>
              {user.otherLinks.map((link, index) => (
                <li key={index}>
                  <strong>{link.title}</strong> - {link.urlLink}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p>
          <strong>Shareable Link:</strong> {user.shareableLink}
        </p>
        {user.profileimg && (
          <div>
            <strong>Profile Image:</strong>
            <img src={user.profileimg} alt="Profile" style={{ width: "100px", height: "100px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailModal;
