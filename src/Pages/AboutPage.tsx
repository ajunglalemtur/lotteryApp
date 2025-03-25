import React from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb"; // Import Breadcrumb

const AboutPage: React.FC = () => {
  return (
    <main className="text-center py-20 px-4 max-w-5xl mx-auto">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | Naga Lottery</title>
        <meta name="description" content="Learn more about Naga Lottery and our mission to bring exciting opportunities to our players!" />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      <h1 className="text-5xl font-bold">About Naga Lottery</h1>
      <p className="mt-4 text-lg">
        Welcome to Naga Lottery! Our mission is to provide a fair, transparent, and exciting lottery experience for everyone.
      </p>

      <section className="mt-8 text-left space-y-6">
        <div>
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="text-gray-300">
            Naga Lottery is a trusted platform that offers a seamless and secure way to participate in various lottery contests.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-300">
            Our goal is to create a fun and rewarding lottery experience while ensuring fairness and transparency in every contest.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Secure & Transparent Draws</li>
            <li>Exciting Contests with Huge Rewards</li>
            <li>Fast & Reliable Customer Support</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
