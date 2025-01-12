import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Welcome to Job Portal</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}></div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/create-job">
          <button>Create a Job</button>
        </Link>
        <Link to="/search-jobs-by-email">
          <button>Search Jobs by Email</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
