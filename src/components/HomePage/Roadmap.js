import { LiaDumbbellSolid } from "react-icons/lia";
import { GrCafeteria } from "react-icons/gr";
import { GrAnalytics } from "react-icons/gr";
import ArrowDownOnSquareIcon from "@heroicons/react/24/outline/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";

function Roadmap({ roadmapSteps, roadmapHeader }) {
  const generationStepData = [
    {
      icon: <GrCafeteria className="mr-2 inline-block h-10 w-10" />,
      description: `Stap 1: ${roadmapSteps[0].fields.stepTitle}`,
      paragraph: `${roadmapSteps[0].fields.stepParagraph}`,
    },
    {
      icon: (
        <LiaDumbbellSolid className="mr-2 inline-block h-10 w-10 fill-black" />
      ),
      description: `Stap 2: ${roadmapSteps[1].fields.stepTitle}`,
      paragraph: `${roadmapSteps[1].fields.stepParagraph}`,
    },
    {
      icon: <GrAnalytics className="mr-2 inline-block h-10 w-10" />,
      description: `Stap 3: ${roadmapSteps[2].fields.stepTitle}`,
      paragraph: `${roadmapSteps[2].fields.stepParagraph}`,
    },
  ];

  return (
    <>
      <div className="grid w-full place-items-center  ">
        <div className="w-full max-w-6xl content-center justify-center px-4 py-4">
          <h2 className="text-center  text-3xl font-bold">{roadmapHeader}</h2>
          <div className="mt-24 grid grid-cols-1 gap-8  md:grid-cols-3">
            {generationStepData.map((i, k) => {
              return (
                <div
                  key={k}
                  className="card bg-base-100 w-full space-y-4 rounded-lg bg-blue-600 pb-8 pt-6 opacity-80 shadow-xl hover:shadow-2xl"
                >
                  {/* <div className="rounded-full inline-block border-2 flex p-3 relative">
                                    <div className="absolute top-5 left-8">
                                        4
                                    </div>
                                </div> */}
                  <div className="-mt-12 grid place-items-center">
                    <div className="flex h-8  w-8  items-center justify-center rounded-full bg-amber-500 font-bold text-slate-100">
                      <p>{k + 1}</p>
                    </div>
                  </div>
                  <div className="card-body  items-center text-center">
                    <p className="text-primary">{i.icon}</p>
                    <p className="mt-2 font-semibold"> {i.description}</p>
                    <p className="mx-2">{i.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
