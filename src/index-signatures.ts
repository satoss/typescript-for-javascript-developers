export {};

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { underTwenty: false, name: 'ham' };

profile.name = 'ham';
profile.age = 53;
profile.nationality = 'Japan';
