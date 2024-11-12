import React from "react";

interface DrinkItem {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  imageUrl: string;
}

interface DrinksMenuProps {
  language: "en" | "zh";
}

const DrinksMenu: React.FC<DrinksMenuProps> = ({ language }) => {
  const menuItems: DrinkItem[] = [
    {
      id: 1,
      title: {
        en: "Coffee (Iced/Hot)",
        zh: "咖啡（冰/热）",
      },
      description: {
        en: "A rich coffee experience topped with frothy milk, perfect for any time of day.",
        zh: "丰富的咖啡体验，加上奶泡，适合任何时间享用。",
      },
      imageUrl: "/Drink_image1.jpg",
    },
    {
      id: 2,
      title: {
        en: "Café Latte",
        zh: "拿铁咖啡",
      },
      description: {
        en: "Creamy and smooth, made with freshly steamed milk and a shot of espresso.",
        zh: "奶香浓郁，由新鲜蒸奶和一份浓缩咖啡制成。",
      },
      imageUrl: "/Drink_image2.jpg",
    },
    {
      id: 3,
      title: {
        en: "Orange Juice",
        zh: "橙汁",
      },
      description: {
        en: "Refreshing juice made from freshly squeezed oranges, bursting with citrus flavor.",
        zh: "由新鲜榨橙制成的清爽果汁，充满柑橘风味。",
      },
      imageUrl: "/Drink_image3.jpg",
    },
    {
      id: 4,
      title: {
        en: "Coca-Cola",
        zh: "可口可乐",
      },
      description: {
        en: "Classic and refreshing, this iconic soda is perfect for quenching your thirst.",
        zh: "经典清爽的汽水，解渴的完美选择。",
      },
      imageUrl: "/Drink_image4.jpg",
    },
    {
      id: 5,
      title: {
        en: "Draft Beer",
        zh: "生啤酒",
      },
      description: {
        en: "Enjoy a cold, crisp draft beer, perfect for relaxation and socializing.",
        zh: "享受一杯冰爽的生啤酒，适合放松和社交。",
      },
      imageUrl: "/Drink_image5.jpg",
    },
    {
      id: 6,
      title: {
        en: "Highball",
        zh: "嗨棒",
      },
      description: {
        en: "A refreshing blend of whiskey and soda, served over ice for a classic drink.",
        zh: "威士忌和苏打的清爽混合饮品，加入冰块，经典之选。",
      },
      imageUrl: "/Drink_image6.jpg",
    },
    {
      id: 7,
      title: {
        en: "Sake",
        zh: "清酒",
      },
      description: {
        en: "Traditional Japanese rice wine, served chilled or warm, offering a unique taste experience.",
        zh: "传统的日本米酒，可冷饮或热饮，带来独特的味觉体验。",
      },
      imageUrl: "/Drink_image7.jpg",
    },
    {
      id: 8,
      title: {
        en: "Moscow Mule",
        zh: "莫斯科骡子",
      },
      description: {
        en: "A refreshing cocktail made with vodka, ginger beer, and lime, served in a copper mug.",
        zh: "以伏特加、姜汁啤酒和酸橙制成的清爽鸡尾酒，铜杯盛装。",
      },
      imageUrl: "/Drink_image8.jpg",
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={item.imageUrl}
            alt={item.title[language]}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-md font-semibold">{item.title[language]}</h3>
            <p className="text-sm text-gray-500">
              {item.description[language]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinksMenu;
