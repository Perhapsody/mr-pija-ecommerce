import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800">About Mr. Pija</h1>
        <p className="text-lg text-gray-600">Learn more about our story and passion for Rubik's Cubes!</p>
      </header>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <p className="text-gray-700 text-lg leading-7">
          At Mr. Pija, we are dedicated to providing the best quality Rubik's Cubes to challenge and entertain minds of all ages. Our journey began with a simple passion for puzzles...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
