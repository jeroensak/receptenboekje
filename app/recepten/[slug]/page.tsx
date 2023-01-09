import Image from "next/image";
import { IngredientsList } from "../../../components/ingredients-list/ingredients-list";
import { recipesVeggilaine } from "../../../data/recipes-veggilaine";
import { getPlaiceholder } from "plaiceholder";
import React from "react";
import { PageWrapper } from "../../../components/page-wrapper";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return recipesVeggilaine.map((recipe) => ({
    slug: recipe.slug,
  }));
}

const getImagePlaceholder = (path: string) => {
  try {
    return getPlaiceholder(path).then(({ base64 }) => base64);
  } catch (err) {
    return undefined;
  }
};

export default async function Page({ params }: Props) {
  const recipe = recipesVeggilaine.find((a) => a.slug === params.slug);

  if (!recipe) return <div>Reseppi nie gevonde</div>;

  const imagePlaceholder = await getImagePlaceholder(recipe.image);

  return (
    <PageWrapper className="h-screenHeightWithoutHeader">
      <div className="w-full h-[200px]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={10000}
          height={10000}
          className="object-cover h-full"
          placeholder={imagePlaceholder === undefined ? undefined : "blur"}
          blurDataURL={imagePlaceholder}
        />
      </div>
      <div className="p-4">
        <h1 className="text-3xl">{recipe.title}</h1>
        <IngredientsList recipe={recipe} />
        <p>
          {recipe.description.split(/\r?\n/).map((text, index) => (
            <React.Fragment key={index}>
              {text} <br />
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </PageWrapper>
  );
}
