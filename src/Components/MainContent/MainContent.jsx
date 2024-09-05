import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import UserDetailModal from "../UserDetailModal/UserDetailModal";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [users, setUsers] = useState([]);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [isUserDetailModalOpen, setUserDetailModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("tapmize.onrender.com/api/v1/profile/profile");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserById = async (id) => {
    try {
      const response = await fetch(`tapmize.onrender.com/api/v1/profile/${id}`);
      const data = await response.json();
      setSelectedUser(data);
      setUserDetailModalOpen(true);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const closeAddUserModal = () => {
    setAddUserModalOpen(false);
  };

  const closeUserDetailModal = () => {
    setUserDetailModalOpen(false);
    setSelectedUser(null);
  };

  const copyUserLinkToClipboard = (userId) => {
    const userLink = `${window.location.origin}/profile/${userId}`;
    navigator.clipboard.writeText(userLink).then(() => {
      alert("User link copied to clipboard!");
    }).catch((error) => {
      console.error("Error copying user link:", error);
    });
  };

  return (
    <div className="main">
      {/* ... other content ... */}
      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-articles">All Users list</h1>
          <button className="view" onClick={() => setAddUserModalOpen(true)}>
            Add User
          </button>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Name</h3>
            <h3 className="t-op">LandMark</h3>
            <h3 className="t-op">Email</h3>
            <h3 className="t-op">View All Details</h3>
            <h3 className="t-op">User Link</h3>
            <h3 className="t-op">Delete</h3>
          </div>
          <div className="items">
            {users.map((user) => (
              <div className="item1" key={user._id}>
                <h3 className="t-op-nextlvl">
                  {user.first} {user.last}
                </h3>
                <h3 className="t-op-nextlvl">{user.landmark}</h3>
                <h3 className="t-op-nextlvl">{user.email}</h3>
                <h3 className="t-op-nextlvl">
                  <button
                    className="view"
                    onClick={() => fetchUserById(user._id)}
                  >
                    View User
                  </button>
                </h3>
                <h3 className="t-op-nextlvl">
                  <button
                    className="view"
                    onClick={() => copyUserLinkToClipboard(user._id)}
                  >
                    User Link
                  </button>
                </h3>
                <h3 className="t-op-nextlvl">
                  <button className="view">Delete</button>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isAddUserModalOpen} onClose={closeAddUserModal}>
        <h2>Add New User</h2>
        {/* Add form elements or content here */}
      </Modal>

      <UserDetailModal
        isOpen={isUserDetailModalOpen}
        onClose={closeUserDetailModal}
        user={selectedUser}
      />
    </div>
  );
};

export default MainContent;
