export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('hum');
console.log(me.name);

const wai = new Japanese.Tokyo.Person('humyan');
console.log(wai.name);

const cichael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(cichael);
