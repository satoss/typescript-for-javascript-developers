export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const barString: Mojiretsu = 'hello';

const example1 = {
  name: 'ham',
  age: 40,
};

type profile = {
  name: string;
  age: number;
};

const example2: profile = {
  name: 'ham',
  age: 40,
};

type profile2 = typeof example1;
