import "./UserDetailModal.css"

const UserDetailModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user.first} {user.last}</p>
        <p><strong>Landmark:</strong> {user.landmark}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>About:</strong> {user.aboutus}</p>
        {/* Add other user details as needed */}
      </div>
    </div>
  );
};

export default UserDetailModal;
