import React from "react";

export default function Home() {
  return (
    <div className="p-4 bg-gray-100 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-600">
          Your journey into the world of advanced web solutions begins here.
          Explore our wide range of services and products designed to enhance
          your digital experience.
        </p>
        <p className="mt-4 text-gray-500">
          Stay tuned for updates, news, and insightful articles.
        </p>
      </div>
    </div>
  );
}
