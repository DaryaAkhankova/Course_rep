// 1.Учитывая данные, 
// определите интерфейс «Пользователь» и используйте его соответствующим образом. 


interface Users {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: Users[] = [
    {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
    },

    {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
    }
];

let newUser: Users = {
    name: 'Natasha',
    age: 19,
    occupation: 'Accountant',
    car: 'BMW',
}

console.log('name:', newUser.name);
console.log('age:', newUser.age);
console.log('occupation:', newUser.occupation);
console.log('car:', newUser.car);


// 2. Создайте интерфейсы для ролей User и Admin,
//  после этого создайте интерйфей Person, который будет соответствовать массиву


interface User {
    name: string;
    age: number;
    occupation: string;
    role?: string;
  }
  
  interface Admin {
    name: string;
    age: number;
    occupation?: string;
    role: string;
  }
  
type Person = User | Admin;
  
  const persons: Person[] = [
    {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
    },
    {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator',
    },
    {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
    },
    {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver',
    },
  ];


