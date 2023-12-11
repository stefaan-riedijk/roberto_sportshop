import { contentfulClient } from "@/lib/contentful/client.js";
import ScrollToTopButton from "../components/BackToTopButton";
import HeroSection from "@/components/HomePage/HeroSection";
import LatestNewsSection from "@/components/HomePage/LatestNewsSection";
import ContentBlock from "@/components/HomePage/ContentBlock";
import Roadmap from "@/components/HomePage/Roadmap";
import FeatureSection from "@/components/HomePage/FeatureSection";

import styles from "@/styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar/Navbar3.js";
import workoutphoto from "../assets/images/workout.jpg";
import nutphoto from "../assets/images/nutrition.jpg";
import { Inter, Anek_Telugu } from "next/font/google";

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({ content_type: "homePage" });
  const sanRes = res.items[0].fields;
  return { props: { pageContent: sanRes } };
}

export default function Home({ pageContent }: any) {
  console.log(pageContent);
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      {/* <div className="container relative mx-auto h-full w-full px-4 py-10">
        <CarouselWithContent></CarouselWithContent>
      </div> */}
      <HeroSection
        heroHeader={pageContent.heroHeader}
        heroImage={pageContent.heroImage.fields.file.url}
      />
      <Roadmap
        roadmapHeader={pageContent.roadmapHeader}
        roadmapSteps={pageContent.roadmapStep}
      />
      <FeatureSection features={pageContent.feature} />
      <LatestNewsSection />
      <ContentBlock />
      <div className="container relative mx-auto max-w-5xl px-5 py-10 text-center text-blue-700">
        <div className="my-4 h-full"></div>
        <div className="container relative mx-auto max-w-xl space-x-3 rounded-lg bg-blue-400">
          <div className="relative inline-flex justify-center place-self-center text-2xl font-semibold">
            <p>R-Force Workout and Nutrition</p>
          </div>
          <div className="py-5 font-medium">
            <p>
              Wij bieden mensen de kennis aan om te starten met een gezonde
              levensstijl en positieve gewoontes vast te houden
            </p>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 space-x-2 px-4 py-12">
          <Link href="/workout-programs">
            <Image
              className="rounded-lg"
              src={workoutphoto}
              width={500}
              height={500}
              alt="Workout Photo"
            />
          </Link>
          <Link href="/nutrition-plans">
            <Image
              className="rounded-lg"
              src={nutphoto}
              width={500}
              height={600}
              alt="Nutrition Photo"
            />
          </Link>
        </div>
        <div className="h-full"></div>
      </div>
    </>
  );
}
