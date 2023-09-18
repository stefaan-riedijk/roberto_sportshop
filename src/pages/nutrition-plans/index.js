import React from "react";
import Navbar from "../../components/Navbar/Navbar3";
import NewCard from "../../components/NewCard";
import { createClient } from "contentful";
import { useRouter } from "next/router";

const contentful = require("contentful");

const client = createClient({
  space: process.env.DB_SPACE_ID,
  accessToken: process.env.DB_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "nutritionPlan" });

  return {
    props: {
      plans: res.items,
    },
  };
}

function NutritionPlans({ plans }) {
  const data = JSON.stringify(plans, null, 4);
  console.log("de plannen zijn: " + data);

  const router = useRouter();
  const currentPath = router.route;
  console.log("het huidige gekke padje is: " + currentPath);

  return (
    <>
      <Navbar />

      <main className="absolute mx-3">
        <div className="relative grid w-full grid-cols-3 content-center gap-4 py-7 align-top">
          <div className="mx-4 ">Lorem Ipsum Hebban Alla Vologe</div>
          <div className="mx-4 ">Lorem Ipsum Hebban Alla Vologe</div>
          <div className="mx-4 ">Lorem Ipsum Hebban Alla Vologe</div>
        </div>

        <div className="relative mx-4 grid w-full grid-cols-2 items-stretch justify-items-center gap-4 md:mx-10 md:grid-cols-3">
          {plans.map((plan) => {
            return (
              <div key={plan.id}>
                <NewCard
                  cardImageUrl={
                    "https:" + plan.fields.planPhoto.fields.file.url
                  }
                  cardTitle={plan.fields.planTitle}
                  cardDescription={plan.fields.description}
                  cardSubheader={
                    "Duration: " + plan.fields.targetAudience + " weeks"
                  }
                  cardUrl={currentPath + "/" + plan.fields.slug}
                />
                <p>{console.log(plan.id)}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default NutritionPlans;
