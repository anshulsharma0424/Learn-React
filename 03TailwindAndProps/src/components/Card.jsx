import React from 'react';

function Card({username, profession="Developer", btnText="Connect"}) {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt="Profile"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
        <p className="text-sm text-gray-500 mb-3">{profession}</p>
        <p className="text-gray-700 text-sm">
          Passionate about building web apps with modern tech like React, Node.js, and Tailwind CSS.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
