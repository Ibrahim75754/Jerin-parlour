import { ChatAltIcon, ClipboardListIcon, SpeakerphoneIcon } from "@heroicons/react/solid";
import React from "react";
import CustomLink from "../../Shared/CustomLink";

const DashboardSideBar = ({ children }) => {
  return (
    <div>
      <div className="drawer drawer-mobile font-poppins">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 lg:w-60  bg-secondary lg:bg-white text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink to="/dashboard/guide" className="flex items-center">
                {" "}
                <SpeakerphoneIcon className="mr-2 w-6 h-6" /> Guide{" "}
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/dashboard/bookinglist"
                className="flex items-center"
              >
                {" "}
                <ClipboardListIcon className="mr-2 w-6 h-6" /> Booking List{" "}
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/dashboard/review" className="flex items-center">
                {" "}
                <ChatAltIcon className="mr-2 w-6 h-6" /> Review{" "}
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
