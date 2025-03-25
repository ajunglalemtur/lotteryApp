import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="text-sm text-gray-400 my-4">
      <Link to="/" className="text-yellow-400 hover:underline">Home</Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <span key={url} className="mx-2">
            › <Link to={url} className="text-yellow-400 hover:underline capitalize">{path}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
