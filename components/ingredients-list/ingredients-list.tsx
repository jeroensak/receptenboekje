"use client";

import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Recipe } from "../../data/recipes";

export const IngredientsList = ({ recipe }: { recipe: Recipe }) => {
  const [feeds, setFeeds] = React.useState(recipe.feeds);

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
              Ingrediënten voor{" "}
              <AdjustPersonCountInput value={feeds} setValue={setFeeds} />{" "}
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
                          `${(ingredient[0] / recipe.feeds) * feeds} ${
                            ingredient[1]
                          }`
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

const AdjustPersonCountInput = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (v: number) => void;
}) => {
  const addPerson = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(value + 1);
  };
  const subtractPerson = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value > 0) setValue(value - 1);
  };

  return (
    <div className="inline-flex items-stretch justify-center">
      <div
        onClick={subtractPerson}
        className="border-gray-300 px-2 ml-1 border border-r-0 rounded-l-md flex items-center hoverfocus:bg-gray-200"
      >
        -
      </div>
      <input
        type="number"
        min={0}
        className="w-8 border border-gray-300 shadow-sm py-1 text-center"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <div
        onClick={addPerson}
        className="border-gray-300 px-2 mr-1 border border-l-0 rounded-r-md flex items-center hoverfocus:bg-gray-200"
      >
        +
      </div>
    </div>
  );
};
