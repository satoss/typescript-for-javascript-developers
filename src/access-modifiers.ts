export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Andoroid extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('taro', 25, 'Japan');
console.log(taro.profile());

let hanako = new Andoroid('hanako', 30, 'USA');
console.log(hanako.profile());
// console.log(taro.age);
// let hanako = new Person();
