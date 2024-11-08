"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import DrinksMenu from "./DrinksMenu";
import PastaMenu from "./PastaMenu";
import PizzaMenu from "./PizzaMenu";
import DessertMenu from "./DessertMenu";

export default function Top() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const renderMenuContent = () => {
    switch (selectedCategory) {
      case "drinks":
        return <DrinksMenu />;
      case "pasta":
        return <PastaMenu />;
      case "pizza":
        return <PizzaMenu />;
      case "dessert":
        return <DessertMenu />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 p-4 min-h-screen bg-gradient-to-br from-orange-300 via-yellow-300 to-red-300">
      {/* 人気メニューセクション */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Menu</h1>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          Popular Menu
        </h2>
        <div className="flex flex-col gap-4">
          {[
            {
              name: "Margherita Pizza",
              image: "/Popular_image1.jpg",
              description:
                "Classic margherita pizza with fresh basil and mozzarella.",
            },
            {
              name: "Spaghetti Carbonara",
              image: "/Popular_image2.jpg",
              description: "Creamy spaghetti carbonara with pancetta.",
            },
            {
              name: "Iced Latte",
              image: "/Popular_image3.jpg",
              description: "Refreshing iced latte made with espresso.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* カテゴリごとのボタン */}
      <div className="flex flex-col gap-4 items-center">
        {["drinks", "pasta", "pizza", "dessert"].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setSelectedCategory(category);
              setOpen(true);
            }}
            className="w-full max-w-xs rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Menu
          </button>
        ))}
      </div>

      {/* ダイアログ */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            <h2 className="text-lg font-bold text-gray-900 mt-4 text-center">
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}{" "}
              Menu
            </h2>
            <div className="max-h-[70vh] overflow-y-auto px-4 pb-4">
              {renderMenuContent()}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Close Menu
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
