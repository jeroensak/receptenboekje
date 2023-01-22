"use client";

import { useState, useEffect } from "react";
import { Recipe, recipes } from "../data/recipes";

export default function HomePage() {
  const [recipe, setRecipe] = useState<Recipe>(
    recipes[
      Math.round(Math.random() * (recipes.length - 1))
    ]
  );

  useEffect(() => {
    const i = setInterval(() => {
      const index = Math.round(Math.random() * (recipes.length - 1));
      setRecipe(recipes[index]);
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
