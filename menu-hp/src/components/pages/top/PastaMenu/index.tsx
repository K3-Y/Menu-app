const PastaMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Tomato Sauce Pasta",
      description:
        "A delightful blend of pasta and fresh tomato sauce, served with a hint of basil.",
      imageUrl: "/Pasta_image1.jpg",
    },
    {
      id: 2,
      title: "Dashi-Infused Pasta",
      description:
        "Pasta infused with rich dashi flavor, served with seasonal ingredients.",
      imageUrl: "/Pasta_image2.jpg",
    },
    {
      id: 3,
      title: "Pesto Pasta",
      description:
        "A refreshing pasta dish made with homemade basil pesto and topped with pine nuts.",
      imageUrl: "/Pasta_image3.jpg",
    },
    {
      id: 4,
      title: "Salmon Cream Pasta",
      description:
        "Creamy pasta with succulent salmon, garnished with fresh herbs.",
      imageUrl: "/Pasta_image4.jpg",
    },
    {
      id: 5,
      title: "Squid and Roe Pasta",
      description:
        "A fusion of squid and roe in a savory sauce, perfect for seafood lovers.",
      imageUrl: "/Pasta_image5.jpg",
    },
    {
      id: 6,
      title: "Basil Pasta",
      description:
        "A fragrant pasta dish featuring fresh basil and a hint of garlic.",
      imageUrl: "/Pasta_image6.jpg",
    },
    {
      id: 7,
      title: "Squid Ink Pasta",
      description:
        "Rich and flavorful pasta made with squid ink for a unique taste experience.",
      imageUrl: "/Pasta_image7.jpg",
    },
    {
      id: 8,
      title: "Napolitan Pasta",
      description:
        "A classic Japanese-style pasta dish with a medley of vegetables and savory sauce.",
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

export default PastaMenu;
