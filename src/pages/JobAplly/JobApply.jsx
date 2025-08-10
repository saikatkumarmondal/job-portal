import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons for a better user experience
import { MdInsertDriveFile } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { linkedin, github, resume } = Object.fromEntries(formData.entries());
    // console.log(linkedin, github, resume);
    const applicationData = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:7777/applications", applicationData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // This code will produce a more stylish and modern-looking toast notification.
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted!",
            background: "#e0f7fa", // Light cyan background for a fresh feel
            iconColor: "#00796b", // A deeper, more vibrant green for the icon
            showConfirmButton: false,
            timer: 3000, // A longer timer to ensure the user sees the message
            timerProgressBar: true, // Adds a progress bar for a modern look
            customClass: {
              popup: "swal2-toast-custom", // Custom class for additional styling
              title: "swal2-toast-title-custom",
              icon: "swal2-toast-icon-custom",
            },
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        }
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          // Custom alert for duplicate application with a fresh design
          Swal.fire({
            icon: "warning",
            title: "Oops! Already Applied",
            html: `<p class="text-lg text-gray-700 font-medium">You've already submitted an application for this job.</p><p class="text-sm text-gray-500 mt-2">${err.response.data.error}</p>`,
            background: "#fff8e1", // Soft yellow background
            iconColor: "#ffb300", // A warm, friendly yellow
            confirmButtonText: "Got It",
            confirmButtonColor: "#ffb300",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            customClass: {
              title: "font-bold text-2xl text-gray-800",
              htmlContainer: "leading-relaxed",
            },
          });
        } else {
          // Other errors with a clean, modern design
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text:
              err.response?.data?.error ||
              "Something went wrong. Please try again.",
            background: "#ffebee", // Soft red background
            iconColor: "#ef5350", // A vibrant red
            confirmButtonText: "Try Again",
            confirmButtonColor: "#ef5350",
            showClass: {
              popup: "animate__animated animate__shakeX",
            },
            customClass: {
              title: "font-bold text-2xl text-gray-800",
            },
          });
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Form Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Apply for Job: <Link to={`/jobs/${jobId}`}>Details</Link>
          </h2>
          <p className="mt-2 text-gray-500">
            Please provide your profile links to submit your application.
          </p>
        </div>

        {/* The Form */}
        <form onSubmit={handleApplyForm} className="space-y-6">
          <div className="space-y-4">
            {/* LinkedIn Input */}
            <div>
              <label
                htmlFor="linkedin"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedin className="text-blue-600" /> LinkedIn Profile
                </span>
              </label>
              <input
                id="linkedin"
                type="url"
                name="linkedin"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="https://www.linkedin.com/in/yourname"
                required
              />
            </div>

            {/* Github Input */}
            <div>
              <label
                htmlFor="github"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                <span className="flex items-center gap-2">
                  <FaGithub className="text-gray-800" /> GitHub Profile
                </span>
              </label>
              <input
                id="github"
                type="url"
                name="github"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="https://github.com/yourname"
                required
              />
            </div>

            {/* Resume Input */}
            <div>
              <label
                htmlFor="resume"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                <span className="flex items-center gap-2">
                  <MdInsertDriveFile className="text-red-500" /> Resume Link
                </span>
              </label>
              <input
                id="resume"
                type="url"
                name="resume"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="e.g., Google Drive, Dropbox, etc."
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 text-xl font-bold text-white rounded-lg 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-indigo-600 hover:to-blue-500 
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 
            transition-all duration-300 transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
