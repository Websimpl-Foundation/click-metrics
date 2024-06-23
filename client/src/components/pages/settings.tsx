import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phone, setPhone] = useState('+642123456789');
  const [twoStep, setTwoStep] = useState(false);
  const [feedback, setFeedback] = useState('');

  const saveChanges = () => {
    setFeedback('Changes saved successfully!');

    setTimeout(() => {
      setFeedback('');
    }, 3000);

    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Two-step verification:', twoStep);
  };

  const deleteAccount = () => {
    const confirmation = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmation) {
      setFeedback('Account deleted successfully!');

      setTimeout(() => {
        setFeedback('');
      }, 3000);

      console.log('Account deleted');
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl text-gray-800 mb-5">Account Settings</h2>
        <form id="settings-form">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="phone" className="block text-gray-700">Phone number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="two-step" className="block text-gray-700">Two-step verification:</label>
          <label className="switch inline-block w-14 h-8 relative mb-4">
            <input
              type="checkbox"
              id="two-step"
              name="two-step"
              checked={twoStep}
              onChange={(e) => setTwoStep(e.target.checked)}
              className="opacity-0 w-0 h-0"
            />
            <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-colors duration-300">
              <span className="slider-thumb absolute bg-white w-6 h-6 rounded-full top-1 left-1 transition-transform duration-300"></span>
            </span>
          </label>

          <button
            type="button"
            id="save-btn"
            onClick={saveChanges}
            className="bg-[#10142c] text-white p-2 rounded w-full mt-4 hover:bg-opacity-90"
          >
            Save Changes
          </button>
          <button
            type="button"
            id="delete-btn"
            onClick={deleteAccount}
            className="bg-red-500 text-white p-2 rounded w-full mt-4 hover:bg-red-600"
          >
            Delete Account
          </button>
          {feedback && <p className="feedback text-green-500 text-center mt-4">{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default Settings;
