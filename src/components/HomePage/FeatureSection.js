import Image from "next/image";

export default function FeatureSection({ features }) {
  return (
    <section class="p-4 dark:bg-gray-800 dark:text-gray-100 lg:p-8">
      <div class="container mx-auto space-y-12">
        <div class="relative flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image
            src={`https:${features[0].fields.featureImage.fields.file.url}`}
            alt=""
            className="object-cover"
            height={300}
            width={600}
          />
          <div class="flex flex-1 flex-col justify-center p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">
              Kom een gratis proefles volgen!
            </span>
            <h3 class="text-3xl font-bold">
              {features[0].fields.featureTitle}
            </h3>
            <p class="my-6 dark:text-gray-400">
              {features[0].fields.featureParagraph}
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <Image
            src={`https:${features[1].fields.featureImage.fields.file.url}`}
            alt=""
            className="object-cover"
            height={300}
            width={600}
          />
          <div class="flex flex-1 flex-col justify-center p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">
              Kom een gratis proefles volgen!
            </span>
            <h3 class="text-3xl font-bold">
              {features[1].fields.featureTitle}
            </h3>
            <p class="my-6 dark:text-gray-400">
              {features[1].fields.featureParagraph}
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image
            src={`https:${features[2].fields.featureImage.fields.file.url}`}
            alt=""
            className="object-cover"
            height={300}
            width={600}
          />
          <div class="flex flex-1 flex-col justify-center p-6 dark:bg-gray-900">
            <span class="text-xs uppercase dark:text-gray-400">
              Kom een gratis proefles volgen!
            </span>
            <h3 class="text-3xl font-bold">
              {features[2].fields.featureTitle}
            </h3>
            <p class="my-6 dark:text-gray-400">
              {features[2].fields.featureParagraph}
            </p>
            <button type="button" class="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
