import React, { useRef } from "react";
import getTeamMembers from "@/lib/contentful/getTeamMembers";
import Navbar from "../components/Navbar/Navbar3";
import TeamSection from "../components/TeamSection";
import { getAboutPage } from "../lib/contentful/getAboutPage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "../lib/contentful/richtextOptions";
import ScrollToTopButton from "../components/BackToTopButton.js";
import ScrollSpy from "../components/ScrollSpy";

export const getStaticProps = async () => {
  const res = await getAboutPage();
  // console.log(res);
  return {
    props: { data: res.data },
  };
};

function About(data) {
  const content = data.data;
  console.log(content);
  const missionSection = useRef(null);
  const teamSection = useRef(null);
  const philosophySection = useRef(null);

  return (
    <>
      <Navbar />
      <div className="container mx-auto grid max-w-6xl grid-cols-3">
        <div className="col-span-2">
          <div className="mx-auto my-5 flex w-32 space-x-11">
            <button
              onClick={() => {
                ScrollToSection(missionSection);
              }}
            >
              Mission
            </button>
            <button
              onClick={() => {
                ScrollToSection(teamSection);
              }}
            >
              Team
            </button>
            <button
              onClick={() => {
                ScrollToSection(philosophySection);
              }}
            >
              Philosophy
            </button>
          </div>
          <section>
            <div className="py-14">
              <h1 className="my-6 text-center text-4xl">Onze Missie</h1>
              {documentToReactComponents(
                content.aboutContent.philosophySection,
                RICHTEXT_OPTIONS,
              )}
            </div>
          </section>
          <div ref={teamSection}>
            <TeamSection members={content.team}></TeamSection>
            <ScrollToTopButton />
          </div>
        </div>
        <div className="fixed right-12 top-40 md:right-24 xl:right-52">
          <ScrollSpy />
        </div>
      </div>
    </>
  );
}

export default About;

const ScrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};
