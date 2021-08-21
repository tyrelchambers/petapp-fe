import React from "react";
import { useParams } from "react-router-dom";
import SubNav from "../../components/SubNav/SubNav";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import Contacts from "../Contacts/Contacts";
import Profile from "../Profile/Profile";

const Settings = () => {
  const { tab } = useParams();

  /*
    profile
      -- contact info -- ability to add contacts there
      -- get notified if your qr code is scanned

    
    addresses
      -- add addresses
      -- set defalt address
  */

  return (
    <Wrapper>
      <main className="mt-10">
        <SubNav
          tabs={[
            { label: "Profile", slug: "/dashboard/profile" },
            { label: "Addresses", slug: "/dashboard/addresses" },
            { label: "Contacts", slug: "/dashboard/contacts" },
          ]}
          tab={tab}
        />
        {tab === "profile" && <Profile />}
        {tab === "contacts" && <Contacts />}
      </main>
    </Wrapper>
  );
};

export default Settings;
