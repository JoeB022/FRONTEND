import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState(user?.username || "");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [newPassword, setNewPassword] = useState("");

  // Handle Cloudinary Upload
  const uploadProfilePicture = async () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setProfilePic(result.info.secure_url);
        }
      }
    );
    widget.open();
  };

  // Handle Profile Update
  const handleUpdateProfile = async () => {
    const response = await fetch(`http://localhost:5000/auth/update_profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        username,
        profilePic,
        newPassword,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      login({ ...user, username, profilePic });
      alert("Profile updated successfully!");
      navigate("/clerk-dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <div className="mb-3">
        <img
          src={profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-circle"
          width="100"
          height="100"
        />
        <button className="btn btn-secondary mt-2" onClick={uploadProfilePicture}>
          Upload New Picture
        </button>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Update Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="New Password (optional)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleUpdateProfile}>
        Save Changes
      </button>
    </div>
  );
}

export default Profile;
