import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div>
      <h2>Job Applied so far: {applications.length}</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full min-w-[600px] md:min-w-full overflow-x-hidden">
          {/* head */}
          <thead>
            <tr>
              <th className="p-2 md:p-4">
                <label>#</label>
              </th>
              <th className="p-2 md:p-4">Name</th>
              <th className="p-2 md:p-4">Job</th>
              <th className="p-2 md:p-4">Favorite Color</th>
              <th className="p-2 md:p-4"></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((item, index) => (
              <JobApplicationRow
                key={item._id}
                application={item}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
