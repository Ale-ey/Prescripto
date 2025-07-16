import React from "react";
import { Header } from "../components/Header";
import { SpecialityMenu } from "../components/specialityMenu";
import { TopDocters } from "../components/TopDocters";
import { Banner } from "../components/Banner";
export const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDocters />
      <Banner />
    </div>
  );
};
