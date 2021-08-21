import React from "react";
import { Main } from "../../components/Buttons/Buttons";
import { H1, H2 } from "../../components/Headings/Headings";

const Profile = () => {
  return (
    <>
      <H1>Profile</H1>
      <hr />
      <H2>Account preferences</H2>
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" name="" id="" />
        <p>Get notified if your pet's QR code is scanned</p>
      </div>
      <Main className="mt-6">Update</Main>
    </>
  );
};

export default Profile;
