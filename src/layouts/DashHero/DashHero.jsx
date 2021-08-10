import React from "react";

const DashHero = ({ left, right }) => {
  return (
    <section className="dashboard-hero w-full rounded-3xl mt-8 p-12 flex items-center shadow-lg">
      <div className="body w-1/2">{left}</div>
      {right}
    </section>
  );
};

export default DashHero;
