const DessertMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake topped with a decadent chocolate frosting.",
      imageUrl: "/Dessert_image1.jpg",
    },
    {
      id: 2,
      title: "Tiramisu",
      description:
        "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
      imageUrl: "/Dessert_image2.jpg",
    },
    {
      id: 3,
      title: "Cheesecake",
      description:
        "Creamy cheesecake with a buttery graham cracker crust, topped with fresh berries.",
      imageUrl: "/Dessert_image3.jpg",
    },
    {
      id: 4,
      title: "Panna Cotta",
      description:
        "Silky smooth panna cotta infused with vanilla, served with a berry coulis.",
      imageUrl: "/Dessert_image4.jpg",
    },
    {
      id: 5,
      title: "Apple Pie",
      description:
        "Homemade apple pie with a flaky crust, filled with spiced apple filling.",
      imageUrl: "/Dessert_image5.jpg",
    },
    {
      id: 6,
      title: "Gelato",
      description:
        "Italian-style ice cream available in various flavors, perfect for a refreshing treat.",
      imageUrl: "/Dessert_image6.jpg",
    },
    {
      id: 7,
      title: "Crème Brûlée",
      description:
        "Delicate custard dessert topped with a layer of caramelized sugar.",
      imageUrl: "/Dessert_image7.jpg",
    },
    {
      id: 8,
      title: "Brownies",
      description:
        "Fudgy brownies made with rich chocolate, served with a scoop of vanilla ice cream.",
      imageUrl: "/Dessert_image8.jpg",
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

export default DessertMenu;
