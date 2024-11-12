// Unauthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-700 p-12 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Access Denied</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You do not have permission to view this page.
                </p>
            </div>
        </div>
    );
}

export default Unauthorized;