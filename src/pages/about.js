import React, { useRef } from "react";
import getTeamMembers from "@/lib/contentful/getTeamMembers";
import Navbar from "../components/Navbar3";
import TeamSection from "../components/TeamSection";
import { getAboutPage } from "../lib/contentful/getAboutPage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "../lib/contentful/richtextOptions";
import ScrollToTopButton from "../components/BackToTopButton.js";

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
  const ScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
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
            ScrollToSection(philosophy);
          }}
        >
          Philosophy
        </button>
        <button
          onClick={() => {
            ScrollToSection(teamSection);
          }}
        >
          Team
        </button>
      </div>
      <section>
        <div>
          {documentToReactComponents(
            content.aboutContent.philosophySection,
            RICHTEXT_OPTIONS,
          )}
        </div>
      </section>
      <div className="container m-auto my-5 h-screen w-60 bg-lime-500 py-6">
        {content.team.map((item) => {
          return <p key={item.id}>{item.authorName}</p>;
        })}
      </div>
      <div ref={teamSection}>
        <TeamSection members={content.team}></TeamSection>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default About;
