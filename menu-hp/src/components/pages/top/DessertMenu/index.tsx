import React from "react";

interface DessertItem {
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

interface DessertMenuProps {
  language: "en" | "zh";
}

const DessertMenu: React.FC<DessertMenuProps> = ({ language }) => {
  const menuItems: DessertItem[] = [
    {
      id: 1,
      title: {
        en: "Chocolate Cake",
        zh: "巧克力蛋糕",
      },
      description: {
        en: "Rich and moist chocolate cake topped with a decadent chocolate frosting.",
        zh: "丰富湿润的巧克力蛋糕，上面覆盖着浓郁的巧克力糖霜。",
      },
      imageUrl: "/Dessert_image1.jpg",
    },
    {
      id: 2,
      title: {
        en: "Tiramisu",
        zh: "提拉米苏",
      },
      description: {
        en: "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
        zh: "经典意大利甜点，由浸泡咖啡的手指饼和马斯卡彭奶酪制成。",
      },
      imageUrl: "/Dessert_image2.jpg",
    },
    {
      id: 3,
      title: {
        en: "Cheesecake",
        zh: "芝士蛋糕",
      },
      description: {
        en: "Creamy cheesecake with a buttery graham cracker crust, topped with fresh berries.",
        zh: "奶油芝士蛋糕，配有黄油饼干底，上面点缀着新鲜的浆果。",
      },
      imageUrl: "/Dessert_image3.jpg",
    },
    {
      id: 4,
      title: {
        en: "Panna Cotta",
        zh: "奶冻布丁",
      },
      description: {
        en: "Silky smooth panna cotta infused with vanilla, served with a berry coulis.",
        zh: "丝滑的奶冻布丁，带有香草味，配有浆果酱。",
      },
      imageUrl: "/Dessert_image4.jpg",
    },
    {
      id: 5,
      title: {
        en: "Apple Pie",
        zh: "苹果派",
      },
      description: {
        en: "Homemade apple pie with a flaky crust, filled with spiced apple filling.",
        zh: "自制的苹果派，外皮酥脆，内馅为调味苹果。",
      },
      imageUrl: "/Dessert_image5.jpg",
    },
    {
      id: 6,
      title: {
        en: "Gelato",
        zh: "意大利冰淇淋",
      },
      description: {
        en: "Italian-style ice cream available in various flavors, perfect for a refreshing treat.",
        zh: "意大利风味冰淇淋，有多种口味，清爽的理想甜点。",
      },
      imageUrl: "/Dessert_image6.jpg",
    },
    {
      id: 7,
      title: {
        en: "Crème Brûlée",
        zh: "焦糖布丁",
      },
      description: {
        en: "Delicate custard dessert topped with a layer of caramelized sugar.",
        zh: "精致的蛋奶甜点，上层覆盖焦糖化的糖。",
      },
      imageUrl: "/Dessert_image7.jpg",
    },
    {
      id: 8,
      title: {
        en: "Brownies",
        zh: "布朗尼",
      },
      description: {
        en: "Fudgy brownies made with rich chocolate, served with a scoop of vanilla ice cream.",
        zh: "富含巧克力的布朗尼，搭配一勺香草冰淇淋。",
      },
      imageUrl: "/Dessert_image8.jpg",
    },
  ];

  return (
    <div className="font-noto mt-4 grid grid-cols-2 gap-4">
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

export default DessertMenu;
