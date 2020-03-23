const categories = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../../assets/icons/plants.png')
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../../assets/icons/seeds.png')
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../../assets/icons/flowers.png')
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../../assets/icons/sprayers.png')
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../../assets/icons/pots.png')
  },
  {
    id: 'fertilizers',
    name: 'fertilizers',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../../assets/icons/fertilizers.png')
  },
];

const products = [
  {
    id: 1,
    name: 'Ocimum gratissimum - Scent leaf',
    description: 'It is usually a homegrown shrub used mainly as spices for cooking delicacies due to its unique aromatic taste. Scent leaves are high in calcium,phophurus, iron, potassium, carbon and vitamin A . The scent leave has been reported to be rich in plants chemicals. Oil from the leaves has been shown to posses antiseptic, antibacterial, and antifungal activities.',
    tags: ['Skin', 'Healthy', 'Family'],
    images: [
      require('../../assets/images/plants_1.png'),
      require('../../assets/images/plants_2.png'),
      require('../../assets/images/plants_3.png'),
      require('../../assets/images/plants_1.png'),
      require('../../assets/images/plants_2.png'),
      require('../../assets/images/plants_3.png'),
      require('../../assets/images/plants_1.png'),
      require('../../assets/images/plants_2.png'),
      require('../../assets/images/plants_3.png'),
    ],
  }
];

const feedProposed = [
  {
    proposition: 'Scent leave aids digestion. If you are the type of person that eats late at night, it is likely you will experience indigestion and bloating. Scent leave has immense health beneﬁts such as easy bowel evacuation and weight management.',
    by: 'Omolola Famodun',
    by_img: require('../../assets/images/userA.png'),
    upvotes: 4,
    downvotes: 1,
  },
  {
    proposition: 'It is used in the treatment of fungal infections, fever, cold and catarrh.Squeezed nchanwu leaves are applied on the skin for treating skin diseases and ringworm.',
    by: 'Anonymous',
    by_img: require('../../assets/images/userB.svg'),
    upvotes: 44,
    downvotes: 6,
  },
  {
    proposition: 'anwu seeds can be infused for treating urinary infections,gonorrhoea infection, vaginal douches for vaginitis. From recent finding scent leaf has been found to be useful in the medication for people living with human immunodefficiency virus (HIV) and Acquired immune defficiency syndrom(AIDS).',
    by: 'https://www.pharmanewsonline.com/',
    by_img: require('../../assets/images/userA.png'),
    upvotes: 9,
    downvotes: 14,
  },

]

const explore = [
  // images
  require('../../assets/images/explore_1.png'),
  require('../../assets/images/explore_2.png'),
  require('../../assets/images/explore_3.png'),
  require('../../assets/images/explore_4.png'),
  require('../../assets/images/explore_5.png'),
  require('../../assets/images/explore_6.png'),
];

const profile = {
  username: 'yemiOdetola',
  location: 'Africa',
  email: 'yemiotola@gmail.com',
  avatar: require('../../assets/images/avatar.png'),
  budget: 5000,
  monthly_cap: 7000,
  notifications: true,
  newsletter: false,
};

export {
  categories,
  explore,
  products,
  profile,
  feedProposed
}