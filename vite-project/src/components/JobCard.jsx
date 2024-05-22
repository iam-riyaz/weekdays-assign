import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";

function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    companyName,
    logoUrl,
    jobDetailsFromCompany,
    location,
    maxJdSalary,
    minJdSalary,
    minExp,
    jobRole,
    salaryCurrencyCode,
  } = job;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 250;
  const displayDetailText = isExpanded
    ? jobDetailsFromCompany
    : `${jobDetailsFromCompany.substring(0, maxLength)}${
        jobDetailsFromCompany.length > maxLength ? "..." : ""
      }`;

  return (
    <div>
      <div className="border-2 border-gray-200 shadow-xl w-72 p-4 min-h-[500px] rounded-xl">
        <div>
          <div className="flex justify-start gap-4 items-center">
            <img className="max-h-12 max-w-12" src={logoUrl} alt="" />
            <div>
              <p className="text-gray-400 ">{companyName}</p>
              <p className="text-gray-700 text-lg font-semibold">{jobRole}</p>
              <p className="text-gray-600 text-sm">{location}</p>
            </div>
          </div>

          <div className="py-2 text-gray-500">
            <span className="font-semibold text-sm">
              Estimeted Salery:{" "}
              <span className="text-yellow-600">
                {" "}
                {salaryCurrencyCode} {minJdSalary ? `${minJdSalary}-` : null}
                {maxJdSalary} LPA ✅
              </span>
            </span>
          </div>

          <div>
            <p className="font-semibold pt-1">About Company:</p>
            <p className="text-sm font-semibold text-gray-700">About Us</p>
            <div className="">
              <div className="">
                <div className={isExpanded?"h-[200px] overflow-y-scroll my-2":" h-[200px] my-2"}>
                {
                  <p className="-z-10">
                    {displayDetailText}{" "}
                    {" "}
                  </p>
                }
                </div>
                <button
                      onClick={toggleExpand}
                      className=" rounded-xl text-sm bg-green-200 px-2 pb-1"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
              </div>
            </div>
          </div>

          <div className="py-2">
            <p className="text-blue-400 font-semibold">Minimum Experience</p>
            {minExp ? <p>{minExp} Years</p> : "Any number of years"}
          </div>
          <div>
            <button className="w-full py-2 bg-teal-400 rounded-xl font-bold">
              Easy Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
