export {};

let profile1: object = {
  name: 'ham',
};
profile1 = {
  birthyear: 1999,
};

let profile2: {
  name: string;
} = {
  name: 'bob',
};
profile2 = {
  name: '1999',
};
