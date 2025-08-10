import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  // const jobsPromise = fetch("http://localhost:7777/jobs").then((res) =>
  //   res.json()
  // );
  return (
    <div>
      <Banner></Banner>
      {/* <HotJobs jobs={jobs}></HotJobs> */}

      <HotJobs jobs={jobs}></HotJobs>
    </div>
  );
};

export default Home;
