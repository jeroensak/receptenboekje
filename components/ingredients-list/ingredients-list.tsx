"use client";

import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Recipe } from "../../data/recipes-veggilaine";

export const IngredientsList = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              "transition-all duration-200 ease-linear group inline-flex items-center py-2"
            )}
          >
            <span>
              Ingrediënten voor {recipe.feeds}{" "}
              {recipe.feeds === 1 ? "persoon" : "personen"}
            </span>
            <BsChevronDown
              className={classNames(
                open && "-scale-y-100",
                "ml-2 h-3 w-3 transition-transform duration-200 ease-linear"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel>
              {recipe.ingredients.map((ingredientGroup, index) => (
                <ul key={index} className="mb-4">
                  {ingredientGroup.map((ingredient, index) => (
                    <li key={index}>
                      {Array.isArray(ingredient) ? (
                        ingredient.length === 1 ? (
                          ingredient[0]
                        ) : (
                          `${ingredient[0]} ${ingredient[1]}`
                        )
                      ) : (
                        <b>{ingredient}</b>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
