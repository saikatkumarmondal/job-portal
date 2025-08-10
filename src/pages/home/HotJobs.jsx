import React from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobs }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Hot Jobs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 space-y-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
