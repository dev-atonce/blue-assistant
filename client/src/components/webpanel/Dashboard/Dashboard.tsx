import React from "react";
import CardDataStats from "../Card/CardDashboard";
import { IoIosMail } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Blog" link="/webpanel/blog">
          <RiContactsBook2Fill size={20} />
        </CardDataStats>
        <CardDataStats title="Mailbox" link="/webpanel/mailbox">
          <IoIosMail size={20} />
        </CardDataStats>
        <>
          <CardDataStats title="Seo" link="/webpanel/seo">
            <IoSettings size={20} />
          </CardDataStats>
          <CardDataStats title="User" link="/webpanel/user">
            <FaUserGear size={20} />
          </CardDataStats>
        </>
      </div>
    </>
  );
};

export default Dashboard;