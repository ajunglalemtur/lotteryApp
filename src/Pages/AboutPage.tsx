import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-6">About Rifa</h1>
      <p className="text-lg text-center max-w-2xl mx-auto">
        Rifa is an exciting online platform that offers users a chance to win
        luxury prizes through fair and transparent contests. We are dedicated to
        bringing excitement and life-changing opportunities to our participants.
      </p>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg max-w-xl mx-auto mt-3">
          We aim to provide a secure, fair, and thrilling experience for all our
          participants. Join us and take your shot at winning amazing prizes!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
