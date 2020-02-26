// eslint-disable-next-line import/prefer-default-export
export const initRootState = {
  allRecepies: [
    {
      recepie: {
        id: 1,
        title: 'Суп',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        creation_time: '26-02-2020 21:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 2,
        title: 'Пюре с котлеткой',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        creation_time: '26-02-2020 20:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 3,
        title: 'Салат',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e',
        creation_time: '26-02-2020 19:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 4,
        title: 'Карбонара',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 5,
        title: 'Утка по пекински',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 6,
        title: 'Бургер',
        description:
          'Lorem ipsum dolor sit ametодлдолдолдодлодддодываыаыаывавыаы  аы авы аавып вап вап выап вы',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
  ],
  recepies: [
    {
      recepie: {
        id: 1,
        title: 'Суп',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        creation_time: '26-02-2020 21:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 2,
        title: 'Пюре с котлеткой',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        creation_time: '26-02-2020 20:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 3,
        title: 'Салат',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e',
        creation_time: '26-02-2020 19:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 4,
        title: 'Карбонара',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 5,
        title: 'Утка по пекински',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
    {
      recepie: {
        id: 6,
        title: 'Бургер',
        description:
          'Lorem ipsum dolor sit ametодлдолдолдодлодддодываыаыаывавыаы  аы авы аавып вап вап выап вы',
        creation_time: '26-02-2020 18:30',
      },
      editing_history: [],
    },
  ],
};

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case 'Jhoosd': {
      return state;
    }
    default: {
      return state;
    }
  }
};
