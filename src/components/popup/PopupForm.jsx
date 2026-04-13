import React, { useState } from 'react';

const PopupForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Popup Form</h2>
      <p>Click on the button at the bottom of this page to open the login form.</p>
      <p>Note that the button and the form are fixed - they will always be positioned at the bottom of the browser window.</p>

      <button
        onClick={openForm}
        className="bg-gray-700 text-white py-4 px-5 rounded-full opacity-80 fixed bottom-6 right-7 w-72 hover:opacity-100"
      >
        Open Form
      </button>

      {isFormOpen && (
        <div className="form-popup fixed bottom-0 right-4 border-4 border-gray-100 z-10">
          <form className="form-container bg-white p-5 max-w-sm">
            <h1 className="text-xl font-semibold mb-4">Login</h1>

            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              className="w-full p-4 mb-5 bg-gray-200 border-none rounded focus:bg-gray-300"
            />

            <label htmlFor="psw" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="w-full p-4 mb-5 bg-gray-200 border-none rounded focus:bg-gray-300"
            />

            <button
              type="submit"
              className="bg-green-600 text-white py-4 px-5 rounded-full w-full opacity-80 hover:opacity-100 mb-3"
            >
              Login
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="bg-red-600 text-white py-4 px-5 rounded-full w-full opacity-80 hover:opacity-100"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
