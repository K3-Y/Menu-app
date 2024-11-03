const DrinksMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Coffee (Iced/Hot)",
      description:
        "A rich coffee experience topped with frothy milk, perfect for any time of day.",
      imageUrl: "/Drink_image1.jpg",
    },
    {
      id: 2,
      title: "Café Latte",
      description:
        "Creamy and smooth, made with freshly steamed milk and a shot of espresso.",
      imageUrl: "/Drink_image2.jpg",
    },
    {
      id: 3,
      title: "Orange Juice",
      description:
        "Refreshing juice made from freshly squeezed oranges, bursting with citrus flavor.",
      imageUrl: "/Drink_image3.jpg",
    },
    {
      id: 4,
      title: "Coca-Cola",
      description:
        "Classic and refreshing, this iconic soda is perfect for quenching your thirst.",
      imageUrl: "/Drink_image4.jpg",
    },
    {
      id: 5,
      title: "Draft Beer",
      description:
        "Enjoy a cold, crisp draft beer, perfect for relaxation and socializing.",
      imageUrl: "/Drink_image5.jpg",
    },
    {
      id: 6,
      title: "Highball",
      description:
        "A refreshing blend of whiskey and soda, served over ice for a classic drink.",
      imageUrl: "/Drink_image6.jpg",
    },
    {
      id: 7,
      title: "Sake",
      description:
        "Traditional Japanese rice wine, served chilled or warm, offering a unique taste experience.",
      imageUrl: "/Drink_image7.jpg",
    },
    {
      id: 8,
      title: "Moscow Mule",
      description:
        "A refreshing cocktail made with vodka, ginger beer, and lime, served in a copper mug.",
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
            alt={item.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinksMenu;
