import { contentfulClient } from "@/lib/contentful/client.js";
import ScrollToTopButton from "../components/BackToTopButton";
import LoginButton from "@/components/LoginButton2n";

import styles from "@/styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

import { CarouselWithContent } from "@/components/Carousel.js";
import Navbar from "../components/Navbar3.js";
import workoutphoto from "../assets/images/workout.jpg";
import nutphoto from "../assets/images/nutrition.jpg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({ content_type: "homePage" });
  return {
    props: {
      homepage: res.items[0].fields,
    },
  };
}

export default function Home(props: any) {
  console.log(process.env.NEXTAUTH_URL);

  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <div className="container relative mx-auto h-full w-full px-4 py-10">
        <CarouselWithContent></CarouselWithContent>
      </div>
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
          <LoginButton />
        </div>
        <div className="h-full"></div>
      </div>
    </>
  );
}
