import React from "react";
import { FaTrashAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const JobApplicationRow = ({ application, index, onDelete }) => {
  const { company, company_logo, title, linkedin, github } = application;
  return (
    <tr className="hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105">
      {/* Index - Hidden on small screens, shown on medium and up */}
      <td className="p-4 hidden md:table-cell">
        <label className="font-bold text-lg text-gray-500">{index + 1}</label>
      </td>

      {/* Company Info - Column spans on small screens */}
      <td className="p-4 sm:p-2 md:p-4">
        <div className="flex items-center gap-4">
          <div className="avatar hidden sm:block">
            <div className="mask mask-squircle w-12 h-12 bg-white shadow-md transition-transform duration-300 hover:scale-110">
              <img src={company_logo} alt={`${company} logo`} />
            </div>
          </div>
          <div>
            <div className="font-bold text-base md:text-lg text-gray-800 transition-colors duration-300 hover:text-blue-600">
              {company}
            </div>
            <div className="text-sm text-gray-500 mt-1">{title}</div>
          </div>
        </div>
      </td>

      {/* Social Links - Responsive visibility and layout */}
      <td className="p-4 hidden sm:table-cell md:table-cell">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <FaLinkedin className="text-xl" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <FaGithub className="text-xl" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          )}
        </div>
      </td>

      {/* Actions - Delete Button */}
      <td className="p-4 text-center">
        <button
          onClick={() => onDelete(application.id)}
          className="btn btn-sm btn-ghost hover:btn-error transition-all duration-300 group"
        >
          <FaTrashAlt className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-white" />
          <span className="hidden sm:inline ml-2 transition-colors duration-300 group-hover:text-white">
            Delete
          </span>
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
