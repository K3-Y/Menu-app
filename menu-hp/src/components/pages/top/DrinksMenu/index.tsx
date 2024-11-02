const DrinksMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Coffee (Iced/Hot)",
      description:
        "A rich coffee experience topped with frothy milk, perfect for any time of day.",
      imageUrl:
        "https://kenko.sawai.co.jp/assets/images/healthy/healthy202403_ttl.jpg",
    },
    {
      id: 2,
      title: "Café Latte",
      description:
        "Creamy and smooth, made with freshly steamed milk and a shot of espresso.",
      imageUrl:
        "https://img03.shop-pro.jp/PA01002/546/product/117208413_o2.jpg?cmsp_timestamp=20200517130310",
    },
    {
      id: 3,
      title: "Orange Juice",
      description:
        "Refreshing juice made from freshly squeezed oranges, bursting with citrus flavor.",
      imageUrl:
        "https://osusume.mynavi.jp/uploads/article/image/10228/card4x3_gf1420374016l.jpg",
    },
    {
      id: 4,
      title: "Coca-Cola",
      description:
        "Classic and refreshing, this iconic soda is perfect for quenching your thirst.",
      imageUrl:
        "https://hisamoto.co.jp/wp-content/uploads/2024/01/%E3%82%B3%E3%83%BC%E3%83%A9190ml%E7%93%B6-scaled.jpg",
    },
    {
      id: 5,
      title: "Draft Beer",
      description:
        "Enjoy a cold, crisp draft beer, perfect for relaxation and socializing.",
      imageUrl:
        "https://yonasato.com/cms/img/columns/SEO/draftbeer/draftbeer_KV.jpg",
    },
    {
      id: 6,
      title: "Highball",
      description:
        "A refreshing blend of whiskey and soda, served over ice for a classic drink.",
      imageUrl:
        "https://tokubai-news-photo-production.tokubai.co.jp/c/w=1400,h=865,a=2,f=jpg/e1a4/9b83/dff0/e396/102b/4367/6a98/5c0f/c88ccd2a00093a56.jpg",
    },
    {
      id: 7,
      title: "Sake",
      description:
        "Traditional Japanese rice wine, served chilled or warm, offering a unique taste experience.",
      imageUrl:
        "https://www.biccamera.com/bc/include_cms_contents/topics/osusume_sake/osusume_sake_01.jpg",
    },
    {
      id: 8,
      title: "Moscow Mule",
      description:
        "A refreshing cocktail made with vodka, ginger beer, and lime, served in a copper mug.",
      imageUrl:
        "https://img.kurashinista.jp/get/2019/06/26/a58df9d676a402e27cb3f0c9c8b6e638.jpg?size=480?v=1",
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
