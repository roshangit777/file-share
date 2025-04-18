"use client";
import React from "react";
import toast from "react-hot-toast";

const Upgrade = () => {
  const upgradePlans = () => {
    toast("Upgrade plans are not available yet.");
  };
  return (
    <>
      <div className="mt-8 p-10 sm:mt-10 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-3xl lg:mx-auto">
        <div className="border border-neutral-200 rounded-lg shadow-sm divide-y divide-neutral-200">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-neutral-900">
              Personal
            </h2>
            <p className="mt-4 text-sm h-10 text-neutral-500">
              For Occasional user.
            </p>
            <p className="mt-4 flex flex-col space-y-2">
              <span className="text-4xl font-extrabold text-neutral-900">
                Free
              </span>
            </p>
            <a
              href="/upload"
              className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-neutral-900 tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm text-neutral-500">
                  10 Uploads/month
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm text-neutral-500">
                  5 File Share/month
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-neutral-200 rounded-lg shadow-sm divide-y divide-neutral-200">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-neutral-900">
              Personal Pro
            </h2>
            <p className="mt-4 text-sm h-10 text-neutral-500">
              For Regular user who use FileShare to share, store, and track.
            </p>
            <p className="mt-4 flex flex-col space-y-2">
              <span className="flex flex-row space-x-2 items-center">
                <span className="text-4xl font-extrabold text-neutral-900">
                  Rs: 199
                </span>
                <span className="text-sm font-medium text-neutral-500">
                  per month
                </span>
              </span>
            </p>
            <button
              className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => upgradePlans()}
            >
              Get Started
            </button>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-neutral-900 tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm text-neutral-500">
                  Unlimited Uploads
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm text-neutral-500">
                  Unlimited Share
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm text-neutral-500">
                  Real-time track
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
