export default [
  {
    id: 'gifts',
    title: 'gifts',
    url: '/gifts',
    titleColor: '#ffffff',
    subItems: [
      [
        {
          id: 'gifts by recipient',
          title: 'gifts by recipient',
          url: null,
          subItems: [
            {
              title: 'gifts for her',
              url: '/gifts/shop-by-recipient/for-her',
            },
            {
              title: 'gifts for him',
              url: '/gifts/shop-by-recipient/for-him',
            },
            {
              title: 'gifts for babies',
              url: '/gifts/shop-by-recipient/for-babies',
            },
          ],
        },
        {
          id: 'gifts by interest',
          title: 'gifts by interest',
          url: '/gifts/personalised-gifts',
          subItems: [],
        },
        {
          id: 'personalised gifts',
          title: 'personalised gifts',
          url: '/gifts/shop-by-personality',
          subItems: [],
        },
      ],
      [
        {
          id: 'gifts by occasion',
          title: 'gifts by occasion',
          url: null,
          subItems: [
            {
              title: 'engagement gifts',
              url: '/gifts/shop-by-occasion/engagement',
            },
            {
              title: 'anniversary gifts',
              url: '/gifts/shop-by-occasion/anniversary',
            },
          ],
        },
        {
          id: 'experience gifts',
          title: 'experience gifts',
          url: '',
          subItems: [],
        },
        {
          id: 'subscription gifts',
          title: 'subscription gifts',
          url: '',
          subItems: [],
        },
        {
          id: 'corporate gifts',
          title: 'corporate gifts',
          url: '',
          subItems: [],
        },
      ],
      [
        {
          id: 'inspiration',
          title: 'inspiration',
          url: null,
          subItems: [
            {
              title: 'just because gifts',
              url: '/themes/just-because-gifts',
            },
            {
              title: 'top unique gifts',
              url: '/themes/top-unique-gifts',
            },
          ],
        },
        {
          id: 'gift cards',
          title: 'gift cards',
          url: '/gift-cards',
          subItems: [],
        },
        {
          id: 'explore gifts',
          title: 'explore gifts',
          url: '/gifts',
          subItems: [],
        },
      ],
    ],
  },
  {
    id: 'weddings',
    title: 'weddings',
    url: '/weddings',
    titleColor: '',
    subItems: [
      [
        {
          id: 'gifts',
          title: 'gifts',
          url: null,
          subItems: [
            {
              title: 'best wedding gifts',
              url: '/wedding-gifts-department/best-wedding-gifts',
            },
            {
              title: 'personalised gifts',
              url: '/wedding-gifts-department/personalised-wedding-gifts',
            },
          ],
        },
        {
          id: 'wedding thank you gifts',
          title: 'wedding thank you gifts',
          url: '/weddings/styling-your-day/wedding-thank-you-gifts',
          subItems: [
            {
              title: 'bridesmaid gifts',
              url: '/weddings/styling-your-day/wedding-thank-you-gifts/bridesmaid-gifts',
            },
            {
              title: 'best man & usher gifts',
              url: '/weddings/styling-your-day/wedding-thank-you-gifts/best-man-usher-gifts',
            },
          ],
        },
      ],
      [
        {
          id: 'bridal fashion',
          title: 'bridal fashion',
          url: '/weddings/styling-your-day/wedding-fashion',
          subItems: [
            {
              title: 'wedding dresses',
              url: '/weddings/styling-your-day/wedding-fashion/wedding-dresses-accessories',
            },
          ],
        },
        {
          id: "children's fashion",
          title: "children's fashion",
          url: '/weddings/styling-your-day/for-children',
          subItems: [],
        },
      ],
    ],
  },
];
