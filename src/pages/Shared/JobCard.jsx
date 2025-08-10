import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,

    description,
    requirements,
    salaryRange,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex">
        <figure>
          <img src={company_logo} alt="Shoes" className="w-16" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center gap-2 ">
            <CiLocationOn></CiLocationOn>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange?.min} - {salaryRange?.max}{" "}
          {salaryRange?.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements &&
            requirements.map((skill, index) => (
              <div className="badge badge-outline" key={index}>
                {skill}
              </div>
            ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
