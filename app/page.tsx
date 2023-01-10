"use client";

import { useState, useEffect } from "react";
import { Recipe, recipesVeggilaine } from "../data/recipes-veggilaine";

export default function HomePage() {
  const [recipe, setRecipe] = useState<Recipe>(
    recipesVeggilaine[
      Math.round(Math.random() * (recipesVeggilaine.length - 1))
    ]
  );

  useEffect(() => {
    const i = setInterval(() => {
      const index = Math.round(Math.random() * (recipesVeggilaine.length - 1));
      setRecipe(recipesVeggilaine[index]);
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <a
        href={`/recepten/${recipe.slug}`}
        className="block px-4 py-3 mx-auto mt-5 text-white bg-green-500 w-fit"
      >
        Doe maar een reseppie
      </a>
    </div>
  );
}
