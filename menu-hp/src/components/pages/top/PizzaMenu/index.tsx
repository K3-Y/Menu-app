const PizzaMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Margherita Pizza",
      description:
        "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      description:
        "A favorite with spicy pepperoni slices on a bed of gooey mozzarella cheese.",
      imageUrl:
        "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
    },
    {
      id: 3,
      title: "Hawaiian Pizza",
      description:
        "A delightful mix of ham and pineapple on a cheesy base, perfect for sweet and savory lovers.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/hawaiian-pizza-lead-65f4641d61062.jpg",
    },
    {
      id: 4,
      title: "Vegetarian Pizza",
      description:
        "Loaded with fresh vegetables like bell peppers, onions, and mushrooms, topped with mozzarella.",
      imageUrl:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
    },
    {
      id: 5,
      title: "BBQ Chicken Pizza",
      description:
        "Savory BBQ sauce, grilled chicken, and red onions come together for a smoky flavor.",
      imageUrl:
        "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
    },
    {
      id: 6,
      title: "Four Cheese Pizza",
      description:
        "A rich blend of mozzarella, cheddar, gorgonzola, and parmesan, perfect for cheese lovers.",
      imageUrl:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/123CBE4C-517C-4401-A668-0D0884F45883/Derivates/936C2A3A-0418-4A9A-B116-E338CABE0650.jpg",
    },
    {
      id: 7,
      title: "Pesto Pizza",
      description:
        "A flavorful base of pesto sauce topped with mozzarella and sun-dried tomatoes.",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-05-pesto-pizza%2Fpesto-pizza-348",
    },
    {
      id: 8,
      title: "Meat Lovers Pizza",
      description:
        "A hearty mix of sausage, bacon, and pepperoni, loaded with cheese for meat enthusiasts.",
      imageUrl:
        "https://www.thecookierookie.com/wp-content/uploads/2023/09/meat-lovers-pizza-recipe-3.jpg",
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
