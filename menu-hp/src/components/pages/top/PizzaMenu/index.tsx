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

interface PizzaMenuProps {
  language: "en" | "zh";
}

const PizzaMenu: React.FC<PizzaMenuProps> = ({ language }) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: {
        en: "Margherita Pizza",
        zh: "玛格丽塔披萨",
      },
      description: {
        en: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
        zh: "经典披萨，配以新鲜的马苏里拉奶酪、西红柿和罗勒。",
      },
      imageUrl: "/Pizza_image1.jpg",
    },
    {
      id: 2,
      title: {
        en: "Pepperoni Pizza",
        zh: "意大利辣香肠披萨",
      },
      description: {
        en: "A favorite with spicy pepperoni slices on a bed of gooey mozzarella cheese.",
        zh: "配有香辣意大利辣香肠和浓郁马苏里拉奶酪的热门披萨。",
      },
      imageUrl: "/Pizza_image2.jpg",
    },
    // 他のメニュー項目も同様に続けてください
    {
      id: 3,
      title: {
        en: "Hawaiian Pizza",
        zh: "夏威夷披萨",
      },
      description: {
        en: "A delightful mix of ham and pineapple on a cheesy base, perfect for sweet and savory lovers.",
        zh: "在奶酪底上配有火腿和菠萝的美味组合，非常适合甜咸口味的爱好者。",
      },
      imageUrl: "/Pizza_image3.jpg",
    },
    {
      id: 4,
      title: {
        en: "Vegetarian Pizza",
        zh: "素食披萨",
      },
      description: {
        en: "Loaded with fresh vegetables like bell peppers, onions, and mushrooms, topped with mozzarella.",
        zh: "配有甜椒、洋葱和蘑菇等新鲜蔬菜，并加上马苏里拉奶酪。",
      },
      imageUrl: "/Pizza_image4.jpg",
    },
    {
      id: 5,
      title: {
        en: "BBQ Chicken Pizza",
        zh: "烧烤鸡肉披萨",
      },
      description: {
        en: "Savory BBQ sauce, grilled chicken, and red onions come together for a smoky flavor.",
        zh: "配有美味的烧烤酱、烤鸡肉和红洋葱，带来烟熏风味。",
      },
      imageUrl: "/Pizza_image5.jpg",
    },
    {
      id: 6,
      title: {
        en: "Four Cheese Pizza",
        zh: "四种奶酪披萨",
      },
      description: {
        en: "A rich blend of mozzarella, cheddar, gorgonzola, and parmesan, perfect for cheese lovers.",
        zh: "融合了马苏里拉、切达、戈贡佐拉和帕尔马干酪，非常适合奶酪爱好者。",
      },
      imageUrl: "/Pizza_image6.jpg",
    },
    {
      id: 7,
      title: {
        en: "Pesto Pizza",
        zh: "香蒜披萨",
      },
      description: {
        en: "A flavorful base of pesto sauce topped with mozzarella and sun-dried tomatoes.",
        zh: "以香蒜酱为底料，配上马苏里拉奶酪和晒干的番茄。",
      },
      imageUrl: "/Pizza_image7.jpg",
    },
    {
      id: 8,
      title: {
        en: "Meat Lovers Pizza",
        zh: "肉食爱好者披萨",
      },
      description: {
        en: "A hearty mix of sausage, bacon, and pepperoni, loaded with cheese for meat enthusiasts.",
        zh: "配有香肠、培根和意大利辣香肠的丰盛披萨，适合肉食爱好者。",
      },
      imageUrl: "/Pizza_image8.jpg",
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

export default PizzaMenu;
