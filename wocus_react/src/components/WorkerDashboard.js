import React from "react";
import "./WorkerDash.css"; // Custom CSS for styling

const domains = [
  { title: "Plumbing", image: "Plumbing.jpg", link: "/plumbing" },
  { title: "Electrical Repair", image: "electrical.jpeg", link: "/electric" },
  { title: "AC Repair", image: "ac-repair.jpeg", link: "/ac" },
  { title: "Electronics Repair", image: "electronics.avif", link: "/electronic" },
  { title: "Artwork", image: "art.jpg", link: "/art" },
  { title: "Construction", image: "construction.jpeg", link: "/con" },
  { title: "Mechanic", image: "mechanic.jpg", link: "/mech" },
  { title: "Software Work", image: "software.jpg", link: "/soft" },
  { title: "Carpentry Work", image: "carpentry.jpg", link: "/car" },
];

const WorkerDashboard = () => {
  return (
    <div className="worker-dashboard">
      <h1 className="text-center my-4">Worker Dashboard</h1>
      <div className="container">
        <div className="row">
          {domains.map((domain, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${domain.image}`}
                  className="card-img-top"
                  alt={domain.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{domain.title}</h5>
                  <a href={domain.link} className="btn btn-primary">
                    Explore {domain.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
