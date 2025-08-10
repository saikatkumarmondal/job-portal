import React from "react";

const AddJobs = () => {
  return (
    <div>
      {/* <h1>Om Namah Shivaya</h1> */}

      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <form className="w-full max-w-4xl p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-center text-red-600 dark:text-red-400">
            Post a New Job
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Info Fieldset */}
            <fieldset className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
              <legend className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Basic Info
              </legend>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="e.g., Senior Software Engineer"
              />

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="e.g., Google"
              />

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="e.g., Remote or New York, NY"
              />

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company Logo
              </label>
              <input
                type="text"
                name="company_logo"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="Company Logo URL"
              />
            </fieldset>

            {/* Other Details Fieldset */}
            <div className="space-y-6">
              <fieldset className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <legend className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Job Type
                </legend>
                <div className="flex flex-nowrap gap-2 overflow-x-auto">
                  {" "}
                  {/* Changed to flex-nowrap and added overflow-x-auto */}
                  {/* All */}
                  <input
                    type="radio"
                    name="jobType"
                    aria-label="All"
                    className="peer hidden"
                    id="jobType-all"
                  />
                  <label
                    htmlFor="jobType-all"
                    className="px-4 py-2 text-sm font-medium rounded-full cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 peer-checked:bg-red-600 peer-checked:text-white transition-colors duration-200" // Changed peer-checked color to red
                  >
                    All
                  </label>
                  {/* On-Site */}
                  <input
                    type="radio"
                    name="jobType"
                    aria-label="On-Site"
                    className="peer hidden"
                    id="jobType-onsite"
                  />
                  <label
                    htmlFor="jobType-onsite"
                    className="px-4 py-2 text-sm font-medium rounded-full cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 peer-checked:bg-red-600 peer-checked:text-white transition-colors duration-200" // Changed peer-checked color to red
                  >
                    On-Site
                  </label>
                  {/* Remote */}
                  <input
                    type="radio"
                    name="jobType"
                    aria-label="Remote"
                    className="peer hidden"
                    id="jobType-remote"
                  />
                  <label
                    htmlFor="jobType-remote"
                    className="px-4 py-2 text-sm font-medium rounded-full cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 peer-checked:bg-red-600 peer-checked:text-white transition-colors duration-200" // Changed peer-checked color to red
                  >
                    Remote
                  </label>
                  {/* Hybrid */}
                  <input
                    type="radio"
                    name="jobType"
                    aria-label="Hybrid"
                    className="peer hidden"
                    id="jobType-hybrid"
                  />
                  <label
                    htmlFor="jobType-hybrid"
                    className="px-4 py-2 text-sm font-medium rounded-full cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 peer-checked:bg-red-600 peer-checked:text-white transition-colors duration-200" // Changed peer-checked color to red
                  >
                    Hybrid
                  </label>
                </div>
              </fieldset>

              <fieldset className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <legend className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Job Category
                </legend>
                <select
                  defaultValue="Select a category"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" // Changed focus ring color to red
                  name="category"
                >
                  <option disabled={true}>Select a category</option>
                  <option>Software Development</option>
                  <option>Data Science & Analytics</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Computing & DevOps</option>
                  <option>Product & Project Management</option>
                </select>
              </fieldset>

              <fieldset className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <legend className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Application Deadline
                </legend>
                <input
                  type="date"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" // Changed focus ring color to red
                  name="application_deadline"
                />
              </fieldset>

              {/* Salary Range Fieldset */}
              <fieldset className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <legend className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Salary Range
                </legend>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Minimum Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" // Changed focus ring color to red
                      name="salaryMin"
                      placeholder="Minimum Salary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Maximum Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" // Changed focus ring color to red
                      name="salaryMax"
                      placeholder="Maximum Salary"
                    />
                  </div>
                  {/* BEGIN FIX: Wrapped Currency label and select in a div for proper grid layout */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Currency
                    </label>
                    <select
                      defaultValue="Select a currency"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" /* Added full Tailwind styling */
                      name="currency"
                    >
                      <option disabled={true}>Select a currency</option>
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>
                  {/* END FIX */}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 text-lg font-bold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200" // Changed button colors to red
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
