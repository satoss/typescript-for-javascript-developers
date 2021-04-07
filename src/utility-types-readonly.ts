export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'hum',
  age: 43,
};

me.age++;
console.log(me);

type PersonalDateType = Readonly<Profile>;

const friend: PersonalDateType = {
  name: 'taro',
  age: 22,
};

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
