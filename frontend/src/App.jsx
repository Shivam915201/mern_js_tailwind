import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Create-Ryuga-App</h1>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full transition-transform duration-200 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105"
      >
        Docs
      </a>
      <h3 className="mt-4 text-lg">Do it yourself gang!</h3>
    </div>
  );
};

export default App;
