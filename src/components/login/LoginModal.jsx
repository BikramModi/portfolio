// components/LoginModal.jsx
import React, { useState, useEffect, useRef } from "react";
import "./LoginModal.css";
import img4 from "../../assets/profile.jpg";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && event.target === modalRef.current) {
        closeModal();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Prevent background scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // 👉 later you can navigate or open another modal
  };

  return (
    <>
      <h2>Modal Login Form</h2>

      <button onClick={openModal} style={{ width: "auto" }}>
        Login
      </button>

      {showModal && (
        <div className="modal" ref={modalRef}>
          <form
            className="modal-content animate"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="imgcontainer">
              <span
                className="close"
                onClick={closeModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && closeModal()}
                title="Close Modal"
              >
                &times;
              </span>

              <img src={img4} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>

              <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember
                me
              </label>
            </div>

            <div className="container footer">
              <button
                type="button"
                onClick={closeModal}
                className="cancelbtn"
              >
                Cancel
              </button>

              <span className="psw">
                Forgot{" "}
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="link-btn"
                >
                  password?
                </button>
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginModal;