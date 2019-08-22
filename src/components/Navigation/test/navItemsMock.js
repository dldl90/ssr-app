export default [
  {
    id: 'gifts',
    name: 'Gifts',
    link: '/gifts',
    subItems: [
      [
        {
          id: 'gifts by recipient',
          name: 'Gifts by Recipient',
          link: null,

          subItems: [
            {
              id: 'gifts-for-her',
              name: 'gifts for her',
              link: '/gifts/shop-by-recipient/for-her',
            },

            {
              id: 'gifts-for-him',
              name: 'gifts for him',
              link: '/gifts/shop-by-recipient/for-him',
            },
          ],
        },

        {
          id: 'gifts-by-interest',
          name: 'gifts by interest',
          link: '/gifts/shop-by-personality',
        },
      ],
      [
        {
          id: 'gifts by occasion',
          name: 'Gifts by Occasion',
          link: '/gifts/shop-by-occasion/engagement',

          subItems: [
            {
              id: 'engagement-gifts',
              name: 'engagement gifts',
              link: '/gifts/shop-by-occasion/engagement',
            },

            {
              id: 'anniversary-gifts',
              name: 'anniversary gifts',
              link: '/gifts/shop-by-occasion/anniversary',
            },
          ],
        },
      ],
      [
        {
          id: 'inspiration',
          name: 'Gifts by Occasion',
        },
      ],
    ],
  },
  {
    id: 'bday',
    name: 'Birthday',
    link: '/birthday-gifts',
  },
]
