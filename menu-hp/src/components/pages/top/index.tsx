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
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const renderMenuContent = () => {
    switch (selectedCategory) {
      case "drinks":
        return <DrinksMenu language={language} />;
      case "pasta":
        return <PastaMenu language={language} />;
      case "pizza":
        return <PizzaMenu language={language} />;
      case "dessert":
        return <DessertMenu language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="font-noto relative z-10 p-4 min-h-screen bg-gradient-to-br from-orange-300 via-yellow-300 to-red-300">
      {/* 言語切り替えボタン */}
      <div className="relative flex justify-end p-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "zh")}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
          {/* <option value="jp">日本語</option>  */}
          {/* <option value="fr">Français</option> */}
          {/* <option value="de">Deutsch</option> */}
        </select>
      </div>

      {/* メニューセクション */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          {language === "en" ? "Menu" : "菜单"}
        </h1>
      </div>

      {/* 人気メニューセクション */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          {language === "en" ? "Popular Menu" : "热门菜单"}
        </h2>
        <div className="flex flex-col gap-4">
          {[
            {
              name: {
                en: "Margherita Pizza",
                zh: "玛格丽塔披萨",
              },
              image: "/Popular_image1.jpg",
              description: {
                en: "Classic margherita pizza with fresh basil and mozzarella.",
                zh: "经典的玛格丽塔披萨，配有新鲜罗勒和马苏里拉奶酪。",
              },
            },
            {
              name: {
                en: "Spaghetti Carbonara",
                zh: "意大利培根奶油面",
              },
              image: "/Popular_image2.jpg",
              description: {
                en: "Creamy spaghetti carbonara with pancetta.",
                zh: "奶油意大利面配培根。",
              },
            },
            {
              name: {
                en: "Iced Latte",
                zh: "冰拿铁",
              },
              image: "/Popular_image3.jpg",
              description: {
                en: "Refreshing iced latte made with espresso.",
                zh: "用浓缩咖啡制成的清爽冰拿铁。",
              },
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md p-3"
            >
              <img
                src={item.image}
                alt={item.name[language]}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-700">
                  {item.name[language]}
                </p>
                <p className="text-sm text-gray-500">
                  {item.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* カテゴリボタン */}
      <div className="flex flex-col gap-4 items-center">
        {["drinks", "pasta", "pizza", "dessert"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setOpen(true);
            }}
            className="w-full max-w-xs rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {language === "en"
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Menu`
              : `${
                  {
                    drinks: "饮料",
                    pasta: "意大利面",
                    pizza: "披萨",
                    dessert: "甜点",
                  }[category]
                } 菜单`}
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
              {language === "en"
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Menu`
                : `${
                    {
                      drinks: "饮料",
                      pasta: "意大利面",
                      pizza: "披萨",
                      dessert: "甜点",
                    }[selectedCategory]
                  } 菜单`}
            </h2>
            <div className="max-h-[70vh] overflow-y-auto px-4 pb-4">
              {renderMenuContent()}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              {language === "en" ? "Close Menu" : "关闭菜单"}
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
