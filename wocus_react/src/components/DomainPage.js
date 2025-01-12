import React from "react";
import JobListByDomain from "./JobListByDomain";

const DomainPage = ({ domain }) => {
  return (
    <div>
      <JobListByDomain domain={domain} />
    </div>
  );
};

export default DomainPage;
