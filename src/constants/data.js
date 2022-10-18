import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const pizzas = [
  {
    name: "Pizza Hải Sản Pesto Xanh",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: "100",
        medium: "150",
        large: "200",
      },
    ],
    category: " Hải sản",
    image: images.pestoXanh,
    description:
      "Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh",
  },
  {
    name: "Pizza Tôm Cocktail",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: " Hải sản",
    image: images.tomCocktail,
    description: "Tôm với nấm, dứa, cà chua và sốt Thousand Island.",
  },
  {
    name: "Pizza Hải Sản Nhiệt Đới",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: " Hải sản",
    image: images.nhietDoi,
    description: "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
  },
  {
    name: "Pizza Aloha",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: " Thịt",
    image: images.aloha,
    description:
      "Thịt nguội, xúc xích tiêu cay và dứa hòa quyện với sốt Thousand Island",
  },
  {
    name: "Pizza Thịt Nguội Canada",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: " Thịt",
    image: images.canada,
    description: "Sự kết hợp giữa thịt nguội và bắp ngọt",
  },
  {
    name: "Pizza Thịt Nguội & Nấm",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: " Thịt",
    image: images.thitnguoi,
    description:
      "Pizza giăm bông và nấm đem đến cho bạn những trải nghiệm thú vị.",
  },
  {
    name: "Pizza Gà Nướng Dứa",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Thịt",
    image: images.chicken,
    description: "Thịt gà mang vị ngọt của dứa kết hợp với vị cay nóng của ớt",
  },
  {
    name: "Pizza Phô Mai",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Chay",
    image: images.phomai,
    description: "Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng.",
  },
];

export default { wines, cocktails, awards, pizzas };
