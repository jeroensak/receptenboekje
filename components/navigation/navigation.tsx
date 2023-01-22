"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { recipes } from "../../data/recipes";
import { Popover, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

export const Navigation = () => {
  const items = recipes
    .map((recipe) => ({
      label: recipe.title,
      slug: recipe.slug,
    }))
    .sort((a, b) =>
      a.label.toLocaleLowerCase() > b.label.toLocaleLowerCase() ? 1 : -1
    );

  const pathname = usePathname();

  return (
    <Popover className="relative w-fit mx-auto">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              "transition-all duration-200 ease-linear group inline-flex items-center py-4 px-8"
            )}
          >
            <span>Recepten</span>
            <BsChevronDown
              className={classNames(
                open && "-scale-y-100",
                "ml-2 h-4 w-4 transition-transform duration-200 ease-linear"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-10 mt-3 w-screen max-w-xs px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      href={`/recepten/${item.slug}`}
                      className={classNames(
                        pathname?.split("/").includes(item.slug) && "text-green-600",
                        "-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      )}
                      onClick={close}
                    >
                      <p className="text-base font-medium">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
