const DessertMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake topped with a decadent chocolate frosting.",
      imageUrl:
        "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
    },
    {
      id: 2,
      title: "Tiramisu",
      description:
        "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyYOkdhPnpnYvLOKiyYu1d0tK4kExFqYedg&s",
    },
    {
      id: 3,
      title: "Cheesecake",
      description:
        "Creamy cheesecake with a buttery graham cracker crust, topped with fresh berries.",
      imageUrl:
        "https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake-copy/dg-Tall-and-Creamy-Cheesecake-superJumbo.jpg",
    },
    {
      id: 4,
      title: "Panna Cotta",
      description:
        "Silky smooth panna cotta infused with vanilla, served with a berry coulis.",
      imageUrl:
        "https://cdn.jwplayer.com/v2/media/XUqZDSbG/thumbnails/HNylojyg.jpg",
    },
    {
      id: 5,
      title: "Apple Pie",
      description:
        "Homemade apple pie with a flaky crust, filled with spiced apple filling.",
      imageUrl:
        "https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg",
    },
    {
      id: 6,
      title: "Gelato",
      description:
        "Italian-style ice cream available in various flavors, perfect for a refreshing treat.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8yPUkD1lmqJdTogehaUYW84OJi-uk_CvHQ&s",
    },
    {
      id: 7,
      title: "Crème Brûlée",
      description:
        "Delicate custard dessert topped with a layer of caramelized sugar.",
      imageUrl:
        "https://www.imperialsugar.com/sites/default/files/styles/recipe_image_node_full/public/recipe/classic-creme-brulee-imperial.jpg?itok=-SaNVTyr",
    },
    {
      id: 8,
      title: "Brownies",
      description:
        "Fudgy brownies made with rich chocolate, served with a scoop of vanilla ice cream.",
      imageUrl:
        "https://www.inspiredtaste.net/wp-content/uploads/2024/01/Brownies-Recipe-Video.jpg",
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
