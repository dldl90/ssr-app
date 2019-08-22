import navDataTransformer from './navDataTransformer';

const mockContentstackData = {
  title: 'Navigation',
  navigation_categories: [
    {
      category: {
        title: 'gifts - levelOneLink',
        url: '/gifts',
        department_color: {
          underline_color :'',
          title_color :'#ffffff',
        },
        columns: [
          {
            column_sections: [
              {
                title: 'gifts by recipient - levelTwoLink',
                url: '/gifts-by-recipient',
                include_link: false,
                links: [],
              },
              {
                title: 'gifts-by-interest - levelTwoLink',
                url: '/gifts-by-interest',
                include_link: true,
              },
            ],
          },
          {
            column_sections: [
              {
                title: 'gifts by occasion - levelTwoLink',
                url: '/gifts-by-occasion',
                include_link: false,
                links: [],
              },
            ],
          },
          {
            column_sections: [
              { title: 'inspiration - levelTwoLink', url: '/inspiration', include_link: true },
            ],
          },
        ],
      },
    },
    {
      category: {
        title: 'birthday - levelOneLink',
        url: '/birthday',
        include_link: true,
        department_color: {
          underline_color :'',
          title_color :'',
        },
      },
    },
  ],
};

describe('navDataTransformer', () => {
  describe('on mobile', () => {
    const isMobile = true;

    const expectedData = [
      [
        {
          id: 'gifts - levelOneLink',
          title: 'gifts - levelOneLink',
          url: '/gifts',
          titleColor: '#ffffff',
          subItems: [
            {
              id: 'gifts by recipient - levelTwoLink',
              title: 'gifts by recipient - levelTwoLink',
              url: null,
              subItems: [],
            },
            {
              id: 'gifts-by-interest - levelTwoLink',
              title: 'gifts-by-interest - levelTwoLink',
              url: '/gifts-by-interest',
              subItems: [],
            },
            {
              id: 'gifts by occasion - levelTwoLink',
              title: 'gifts by occasion - levelTwoLink',
              url: null,
              subItems: [],
            },
            {
              id: 'inspiration - levelTwoLink',
              title: 'inspiration - levelTwoLink',
              url: '/inspiration',
              subItems: [],
            },
          ],
        },
        {
          id: 'birthday - levelOneLink',
          title: 'birthday - levelOneLink',
          url: '/birthday',
          titleColor: '#555555',
          subItems: [],
        },
      ],
    ];

    it('should flatten columns and column_sections', () => {
      expect(navDataTransformer({ navData: mockContentstackData, isMobile })).toEqual(expectedData);
    });
  });

  describe('on desktop', () => {
    const isMobile = false;

    const expectedData = [
      {
        id: 'gifts - levelOneLink',
        title: 'gifts - levelOneLink',
        url: '/gifts',
        titleColor: '#ffffff',
        subItems: [
          [
            {
              id: 'gifts by recipient - levelTwoLink',
              subItems: [],
              title: 'gifts by recipient - levelTwoLink',
              url: null,
            },
            {
              id: 'gifts-by-interest - levelTwoLink',
              subItems: [],
              title: 'gifts-by-interest - levelTwoLink',
              url: '/gifts-by-interest',
            },
          ],
          [
            {
              id: 'gifts by occasion - levelTwoLink',
              subItems: [],
              title: 'gifts by occasion - levelTwoLink',
              url: null,
            },
          ],
          [
            {
              id: 'inspiration - levelTwoLink',
              subItems: [],
              title: 'inspiration - levelTwoLink',
              url: '/inspiration',
            },
          ],
        ],
      },
      {
        id: 'birthday - levelOneLink',
        title: 'birthday - levelOneLink',
        subItems: [],
        titleColor: '#555555',
        url: '/birthday',
      },
    ];

    const transformedData = navDataTransformer({ navData: mockContentstackData, isMobile });

    it('should flatten column_sections', () => {
      expect(transformedData).toEqual(expectedData);
    });
  });
});
