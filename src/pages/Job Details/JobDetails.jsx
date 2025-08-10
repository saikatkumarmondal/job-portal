import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  MdBusiness,
  MdAttachMoney,
  MdLocationOn,
  MdDateRange,
  MdEmail,
} from "react-icons/md";
import { FaInfoCircle, FaTasks } from "react-icons/fa";

const JobDetailsCard = () => {
  const {
    _id,
    title,
    company,
    salaryRange,
    description,
    responsibilities,
    location,
    applicationDeadline,
    company_logo,
    hr_email,
  } = useLoaderData();

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Card Header with Company Logo */}
        <div className="bg-gray-50 p-6 md:p-8 flex items-center gap-6 border-b border-gray-200">
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-500 mt-1 flex items-center">
              <MdBusiness className="text-xl mr-2 text-gray-400" />
              {company}
            </p>
          </div>
        </div>

        {/* Key Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-8 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-full">
              <MdAttachMoney className="text-2xl text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Salary</p>
              <p className="text-lg font-semibold text-gray-800">
                ${salaryRange.min} - ${salaryRange.max}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-100 rounded-full">
              <MdDateRange className="text-2xl text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Deadline</p>
              <p className="text-lg font-semibold text-gray-800">
                {applicationDeadline}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <MdLocationOn className="text-2xl text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Location</p>
              <p className="text-lg font-semibold text-gray-800">{location}</p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="p-6 md:p-8 space-y-8">
          {/* HR Email Section - Moved for visibility */}
          <div className="bg-gray-50 p-5 rounded-xl flex items-center gap-4 border border-gray-200">
            <div className="p-3 bg-indigo-100 rounded-full flex-shrink-0">
              <MdEmail className="text-2xl text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                HR Contact Email
              </p>
              <a
                href={`mailto:${hr_email}`}
                className="text-lg font-semibold text-indigo-700 hover:underline"
              >
                {hr_email}
              </a>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <FaInfoCircle className="text-2xl mr-2 text-blue-400" />
              Job Description
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Job Responsibilities */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <FaTasks className="text-2xl mr-2 text-blue-400" />
              Job Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Now Button Section */}
        <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200 flex justify-center">
          <Link to={`/jobApply/${_id}`}>
            <button
              className="w-full sm:w-auto px-12 py-4 text-xl font-bold text-white rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-indigo-600 hover:to-blue-500 
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 
            transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
