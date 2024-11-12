import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const DonorProfile = () => {
    const donor = {
        name: 'Global Scholarship Foundation',
        picture: '../img/background', 
        contact: '987-654-3210',
        email: 'contact@globalscholarships.com',
    };

    // State for managing the password change modal
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle Password Change
    const handleChangePassword = () => {
        if (newPassword === confirmPassword) {
            // Logic for changing password goes here
            alert('Password changed successfully!');
            setShowPasswordModal(false);
            // Reset the input fields
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-20">
            {/* Profile Card */}
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-6">
                    <img
                        src={donor.picture}
                        alt="Donor Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{donor.name}</h2>
                        <p className="text-gray-600 mt-2"><strong>Contact:</strong> {donor.contact}</p>
                        <p className="text-gray-600"><strong>Email:</strong> {donor.email}</p>
                        <p className="text-gray-700"><strong>Password:</strong> ****</p>

                        <button
                            onClick={() => setShowPasswordModal(true)}
                            className="text-sm text-gray-600 underline focus:outline-none"
                        >
                            Change Password
                        </button>

                    </div>
                </div>






            </div>


            {/* Change Password Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h5 className="font-bold">Change Password</h5>
                            <button type="button" className="text-gray-500" onClick={() => setShowPasswordModal(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <label htmlFor="currentPassword" className="block text-gray-700">Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="Enter your current password"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter your new password"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your new password"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end p-4 border-t">
                            <button
                                type="button"
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="bg-red-600 text-white py-2 px-4 rounded-lg"
                                onClick={handleChangePassword}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonorProfile;
