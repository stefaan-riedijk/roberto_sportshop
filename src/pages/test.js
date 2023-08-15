import React from "react";
import Navbar from "../components/Navbar3";

import { contentfulClient } from "../lib/contentful/client";
import { RICHTEXT_OPTIONS } from "../lib/contentful/richtextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({ content_type: "homePage" });
  return {
    props: {
      homepage: res.items[0].fields,
    },
  };
}

function Test(props) {
  console.log(JSON.stringify(props.homepage, null, 4));
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="m-auto max-w-2xl">
          {documentToReactComponents(
            props.homepage.firstParagraph,
            RICHTEXT_OPTIONS,
          )}
        </div>
        <div className="m-auto max-w-2xl">
          {documentToReactComponents(
            props.homepage.welcomeText,
            RICHTEXT_OPTIONS,
          )}
        </div>
      </main>
    </>
  );
}

export default Test;
