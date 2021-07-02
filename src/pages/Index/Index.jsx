import React from "react";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import "./Index.css";
import video from "../../assets/bg-video.mp4";
import { H1 } from "../../components/Headings/Headings";

const Index = () => {
  return (
    <Wrapper>
      <Header />

      <section className="hero mt-10 rounded-lg shadow-lg overflow-hidden">
        <video autoPlay muted loop id="heroVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-body flex items-center">
          <H1 className="text-6xl max-w-2xl ml-8 text-white leading-normal">
            Protect the pet you love.{" "}
            <span className="text-green-500 font-black text-7xl">
              They're family.
            </span>
          </H1>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
