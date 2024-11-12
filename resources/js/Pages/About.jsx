import React from "react";
import { Link } from 'react-router-dom';

function About(){
    return (
        <>
             <div className="flex items-center justify-center min-h-screen">
                <div className="bg-gray-200 p-8 rounded-lg max-w-2xl text-center">
                    <h2 className="text-xl font-bold mb-2">About Us</h2>
                    <h3 className="text-lg font-semibold mb-4">Welcome to Scholar Hub!</h3>
                    <p className="mb-4 text-gray-700">
                    We created this website to make it easier for students to find scholarships that match their goals. We know that searching for scholarships can be overwhelming, so our mission is to provide a straightforward and accessible platform for students to discover scholarships based on their field of study, educational level, and career aspirations.
                    </p>
                    <p className="mb-4 text-gray-700">
                    Our site is designed to help you save time by connecting you directly to scholarship opportunities that fit your needs. We're passionate about supporting students on their educational journeys and believe that everyone should have the chance to reach their potential, regardless of financial background.
                    </p>
                    <p className="text-gray-700">
                    Find the scholarship that's right for you, and take a step closer to achieving your dreams with Scholar Hub.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;