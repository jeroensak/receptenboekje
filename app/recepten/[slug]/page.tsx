import Image from "next/image";
import { IngredientsList } from "../../../components/ingredients-list/ingredients-list";
import { Recipe, recipesVeggilaine } from "../../../data/recipes-veggilaine";

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

export default async function Page({ params }: Props) {
  const recipe = recipesVeggilaine.find((a) => a.slug === params.slug);

  if (!recipe) return <div>Reseppi nie gevonde</div>;

  return (
    <div>
      <div className="w-full h-[200px]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={10000}
          height={10000}
          className="object-cover h-full"
        />
      </div>
      <div className="p-4">
        <h1 className="text-3xl">{recipe.title}</h1>
        <IngredientsList recipe={recipe} />
        <p>
          {recipe.description.split(/\r?\n/).map((text) => (
            <>
              {text} <br />
              <br />
            </>
          ))}
        </p>
      </div>
    </div>
  );
}
