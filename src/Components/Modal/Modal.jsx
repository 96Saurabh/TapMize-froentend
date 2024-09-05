import { useState } from "react";
import axios from "axios";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  // State to handle form data
  const [formData, setFormData] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    landmark: "",
    contact: "",
    aboutus: "",
    profileimg: null,
    otherLinks: [],
  });

  const [socialLink, setSocialLink] = useState({
    icon: "",
    urlLink: "",
    title: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  // Handle adding a social link
  const handleAddSocialLink = () => {
    setFormData((prev) => ({
      ...prev,
      otherLinks: [...prev.otherLinks, socialLink],
    }));
    setSocialLink({
      icon: "",
      title: "",
      urlLink: "",
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append simple fields
    Object.keys(formData).forEach((key) => {
      if (key !== "otherLinks") {
        if (formData[key] instanceof File) {
          data.append(key, formData[key]);
        } else {
          data.append(key, formData[key]);
        }
      }
    });

    // Append otherLinks array
    formData.otherLinks.forEach((link, index) => {
      data.append(`otherLinks[${index}][icon]`, link.icon);
      data.append(`otherLinks[${index}][title]`, link.title);
      data.append(`otherLinks[${index}][urlLink]`, link.urlLink);
    });

    // Debugging FormData
    console.log([...data.entries()]);

    try {
      const response = await axios.post(
        "https://tapmize.onrender.com/api/v1/profile/save-user",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Assuming the response contains the shareable link
      const { shareableLink } = response.data;

      // Display the shareable link
      alert(`Data saved successfully! Shareable link: ${shareableLink}`);

      // Optionally close the modal
      onClose();
    } catch (error) {
      console.error(
        "There was an error saving the user!",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <form onSubmit={handleSubmit} className={styles.modal}>
        <div className={styles.profileinfo}>
          <div className={styles.modalContent}>
            Add User Profile Information
          </div>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="first"
                value={formData.first}
                onChange={handleChange}
              />
              <div className={styles.textfield}>First Name</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="middle"
                value={formData.middle}
                onChange={handleChange}
              />
              <div className={styles.textfield}>Middle Name</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="last"
                value={formData.last}
                onChange={handleChange}
              />
              <div className={styles.textfield}>Last Name</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
              <div className={styles.textfield}>Landmark</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              <div className={styles.textfield}>Contact Link</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className={styles.textfield}>Email</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                name="aboutus"
                value={formData.aboutus}
                onChange={handleChange}
              />
              <div className={styles.textfield}>About Us</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="file"
                placeholder=" "
                name="profileimg"
                onChange={handleFileChange}
              />
              <div className={styles.textfield}>Profile Picture</div>
            </div>
          </div>
        </div>

        <div className={styles.profileinfo}>
          <div className={styles.modalContent}>Add User Social Links</div>
          <div className={styles.formContainer}>
            <div className={styles.iconSelect}>
              <select
                className={styles.iconSelect}
                name="icon"
                value={socialLink.icon}
                onChange={(e) =>
                  setSocialLink({ ...socialLink, icon: e.target.value })
                }
              >
                <option value="">Select Icons</option>
                <option value="Email">Email</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Phone">Phone</option>
                <option value="Website">Website</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Youtube">Youtube</option>
                <option value="Twitter">Twitter</option>
                <option value="Catloge">Catloge</option>
                <option value="Portfolio">Portfolio</option>
                <option value="GooglePay">GooglePay</option>
                <option value="PhonePay">PhonePay</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                value={socialLink.urlLink}
                onChange={(e) =>
                  setSocialLink({ ...socialLink, urlLink: e.target.value })
                }
              />
              <div className={styles.textfield}>URL Link</div>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder=" "
                value={socialLink.title}
                onChange={(e) =>
                  setSocialLink({ ...socialLink, title: e.target.value })
                }
              />
              <div className={styles.textfield}>Title</div>
            </div>
            <button
              type="button"
              className={styles.addButton}
              onClick={handleAddSocialLink}
            >
              Add
            </button>
          </div>

          {/* Render Social Links Table */}
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Title</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {formData.otherLinks.map((link, index) => (
                  <tr key={index}>
                    <td>{link.icon}</td>
                    <td>{link.title}</td>
                    <td>{link.urlLink}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default Modal;
