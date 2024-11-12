import React from "react";

interface MenuItem {
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

interface PastaMenuProps {
  language: "en" | "zh";
}

const PastaMenu: React.FC<PastaMenuProps> = ({ language }) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: {
        en: "Tomato Sauce Pasta",
        zh: "番茄酱意大利面",
      },
      description: {
        en: "A delightful blend of pasta and fresh tomato sauce, served with a hint of basil.",
        zh: "美味的意大利面配上新鲜的番茄酱，搭配一丝罗勒香味。",
      },
      imageUrl: "/Pasta_image1.jpg",
    },
    {
      id: 2,
      title: {
        en: "Dashi-Infused Pasta",
        zh: "柴鱼高汤意大利面",
      },
      description: {
        en: "Pasta infused with rich dashi flavor, served with seasonal ingredients.",
        zh: "充满浓郁柴鱼高汤风味的意大利面，配上时令食材。",
      },
      imageUrl: "/Pasta_image2.jpg",
    },
    {
      id: 3,
      title: {
        en: "Pesto Pasta",
        zh: "青酱意大利面",
      },
      description: {
        en: "A refreshing pasta dish made with homemade basil pesto and topped with pine nuts.",
        zh: "用自制罗勒青酱制作的清爽意大利面，上面点缀着松子。",
      },
      imageUrl: "/Pasta_image3.jpg",
    },
    {
      id: 4,
      title: {
        en: "Salmon Cream Pasta",
        zh: "奶油鲑鱼意大利面",
      },
      description: {
        en: "Creamy pasta with succulent salmon, garnished with fresh herbs.",
        zh: "奶油意大利面搭配鲜美的鲑鱼，并点缀新鲜香草。",
      },
      imageUrl: "/Pasta_image4.jpg",
    },
    {
      id: 5,
      title: {
        en: "Squid and Roe Pasta",
        zh: "鱿鱼鱼卵意大利面",
      },
      description: {
        en: "A fusion of squid and roe in a savory sauce, perfect for seafood lovers.",
        zh: "鱿鱼和鱼卵融合在美味的酱汁中，是海鲜爱好者的完美选择。",
      },
      imageUrl: "/Pasta_image5.jpg",
    },
    {
      id: 6,
      title: {
        en: "Basil Pasta",
        zh: "罗勒意大利面",
      },
      description: {
        en: "A fragrant pasta dish featuring fresh basil and a hint of garlic.",
        zh: "香味浓郁的意大利面，搭配新鲜的罗勒和一丝蒜香。",
      },
      imageUrl: "/Pasta_image6.jpg",
    },
    {
      id: 7,
      title: {
        en: "Squid Ink Pasta",
        zh: "墨鱼汁意大利面",
      },
      description: {
        en: "Rich and flavorful pasta made with squid ink for a unique taste experience.",
        zh: "采用墨鱼汁制作的浓郁美味意大利面，带来独特的风味体验。",
      },
      imageUrl: "/Pasta_image7.jpg",
    },
    {
      id: 8,
      title: {
        en: "Napolitan Pasta",
        zh: "拿波里意大利面",
      },
      description: {
        en: "A classic Japanese-style pasta dish with a medley of vegetables and savory sauce.",
        zh: "经典的日式意大利面，配有多种蔬菜和美味酱汁。",
      },
      imageUrl: "/Pasta_image8.jpg",
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

export default PastaMenu;
