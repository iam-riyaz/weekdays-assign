import React, { useEffect } from "react";
import { jobData } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/jobsSlice";
import JobCard from "../components/JobCard";
import "./Dashboard.css";
import FilterBar from "../components/FilterBar";

function Dashboard() {
  const jobs = useSelector((state) => state.jobs.filteredJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(jobs);
    //   dispatch(setFilter({location:"mumbai",minExp:3}))
  }, []);
  return (
    <div className="main-page">
      Dashboard
      <div>
        <FilterBar />
      </div>
      <div className="cardList">
        {jobs.map((job) => {
          return (
            <>
              <JobCard />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
