import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow-lg">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="/dashboard"
        >
          React Tailwind
        </a>
        <ul className="mt-6">
          <li className="px-2 py-1 items-center">
            <Link to="/dashboard">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/error">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Error</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/dashboard">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/error">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Error</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/dashboard">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/error">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Error</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/dashboard">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/error">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Error</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/dashboard">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-1 items-center">
            <Link to="/error">
              <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                <span>Error</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
