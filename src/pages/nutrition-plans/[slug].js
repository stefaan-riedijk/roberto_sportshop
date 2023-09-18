import React from "react";
import { contentfulClient } from "../../lib/contentful/client";
import Navbar from "../../components/Navbar/Navbar3";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  // get data from a headless CMS
  const res = await contentfulClient.getEntries({
    content_type: "nutritionPlan",
    limit: 1,
    "fields.slug": context.params.slug,
  });
  console.log("de nutrition plans zijn: ", res);
  return {
    props: {
      plan: res.items,
    },
  };
}

export default function NutritionPage(props) {
  const plan = props.plan[0].fields;
  const str = JSON.stringify(plan, null, 4);
  console.log("Nieuwe objectg uit por = " + str);
  //const str = JSON.stringify(props.program[0], null, 4)
  //console.log('Naam van de nieuwe nieuwe programma is' + str)
  //const naam_str =JSON.stringify(program, null, 4)
  //console.log('Nieuwe ultranieuwe namm is gelijk aan: ' + naam_str)
  return (
    <main>
      <Navbar />

      <div className="container mx-auto w-screen px-6 lg:max-w-2xl">
        <div className="relative mx-6 mt-8 h-36 max-w-lg justify-center md:mx-auto lg:mt-16 lg:h-52 lg:max-w-2xl">
          <Image
            className="rounded-lg object-cover shadow-lg"
            src={"https:" + plan.planPhoto.fields.file.url}
            fill={true}
            alt="Workout Program Image"
          />
        </div>
        <div className=" mx-5 mt-5 justify-center py-3 text-center">
          <h1 className="text text-3xl font-medium">{plan.planTitle}</h1>
          <h1 className="text-2xl font-normal">{plan.description}</h1>
          <h1 className="text-xl font-normal">
            {"Doelgroep: " + plan.targetAudience}
          </h1>
        </div>
        <div className="mt-8 py-4">
          <Link href="/book-a-call">
            <button
              type="button"
              class="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get more info
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
