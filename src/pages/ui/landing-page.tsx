import {
  Banner,
  Description,
  For,
  Graduates,
  Programs,
  Teachers,
  Ticker,
  WhyUs,
  WorkShops,
} from "@/widgets/home";

export const LandingPage = () => {
  return (
    <>
      <Banner />
      <Description />
      <Programs />
      <Ticker />
      <Teachers />
      <For />
      <WorkShops />
      <WhyUs />
      <Graduates />
    </>
  );
};
