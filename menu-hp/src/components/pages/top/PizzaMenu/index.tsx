const PizzaMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Margherita Pizza",
      description:
        "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
      imageUrl: "/Pizza_image1.jpg",
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      description:
        "A favorite with spicy pepperoni slices on a bed of gooey mozzarella cheese.",
      imageUrl: "/Pizza_image2.jpg",
    },
    {
      id: 3,
      title: "Hawaiian Pizza",
      description:
        "A delightful mix of ham and pineapple on a cheesy base, perfect for sweet and savory lovers.",
      imageUrl: "/Pizza_image3.jpg",
    },
    {
      id: 4,
      title: "Vegetarian Pizza",
      description:
        "Loaded with fresh vegetables like bell peppers, onions, and mushrooms, topped with mozzarella.",
      imageUrl: "/Pizza_image4.jpg",
    },
    {
      id: 5,
      title: "BBQ Chicken Pizza",
      description:
        "Savory BBQ sauce, grilled chicken, and red onions come together for a smoky flavor.",
      imageUrl: "/Pizza_image5.jpg",
    },
    {
      id: 6,
      title: "Four Cheese Pizza",
      description:
        "A rich blend of mozzarella, cheddar, gorgonzola, and parmesan, perfect for cheese lovers.",
      imageUrl: "/Pizza_image6.jpg",
    },
    {
      id: 7,
      title: "Pesto Pizza",
      description:
        "A flavorful base of pesto sauce topped with mozzarella and sun-dried tomatoes.",
      imageUrl: "/Pizza_image7.jpg",
    },
    {
      id: 8,
      title: "Meat Lovers Pizza",
      description:
        "A hearty mix of sausage, bacon, and pepperoni, loaded with cheese for meat enthusiasts.",
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

export default PizzaMenu;
