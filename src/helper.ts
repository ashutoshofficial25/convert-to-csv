type FlattenedKeys = string[];

export const flatObjectKeys = (
  obj: Record<string, any>,
  parentKey = ''
): FlattenedKeys => {
  return Object.keys(obj).flatMap((key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return flatObjectKeys(obj[key], newKey);
    } else {
      return newKey;
    }
  });
};

export const data = [
  {
    name: 'somename',
    email: 'somename@example.com',
    address: {
      lene1: 'something',
      postalCode: 'postal-code',
      area: {
        test: 'rest',
        post: 'mess',
      },
    },
  },
  {
    name: 'data3',
    email: 'somename@example.com',
    address: {
      lene1: 'something',
      postalCode: 'postal-code',
      area: {
        test: 'rest',
        post: 'mess',
      },
    },
  },
  {
    name: 'data3',
    email: 'ss@example.com',
    address: {
      lene1: 'something',
      postalCode: 'postal-code',
    },
  },
];
