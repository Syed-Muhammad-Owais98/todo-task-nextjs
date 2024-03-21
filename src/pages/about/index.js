import React from "react";

const About = () => {
  return (
    <div className="p-4 bg-gray-100 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-xl text-gray-600">
          Founded in [Year], our company has been at the forefront of
          technological innovation. We're driven by a passion to create
          solutions that empower businesses and individuals alike.
        </p>
        <p className="mt-4 text-gray-500">
          Our team is composed of dedicated professionals from diverse
          backgrounds, all united by a common goal: to deliver excellence in
          everything we do.
        </p>
      </div>
    </div>
  );
};

export default About;
