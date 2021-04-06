export {};

let name = 'taro';

name = 'ham';

let nickname = 'ham' as const;
nickname = 'ham';

let profile = {
  name: 'atusi',
  height: 178,
} as const;

// profile.name = 'ham';
// profile.height = 180;
