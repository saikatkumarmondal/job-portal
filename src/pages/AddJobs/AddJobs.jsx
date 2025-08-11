import React from "react";
import useAuth from "../../hooks/useAuth";

const AddJobs = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    // console.log(jobData);

    //process salary range data
    const { min, max, currency, ...newJob } = jobData;
    newJob.salaryRange = { min, max, currency };

    //process requirements
    newJob.requirements = newJob.requirements
      .split(",")
      .map((item) => item.trim());
    console.log(newJob);

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((item) => item.trim());
  };
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2>Please add a job</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="company"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            name="company_logo"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="on-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="hybrid"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Categories</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>INR</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job Requirements (Separated by commas)"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (Separated by commas)"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            className="input"
            name="hr_email"
            defaultValue={user?.email || ""}
            placeholder="HR Email"
            readOnly
          />
        </fieldset>

        <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJobs;
