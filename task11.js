// /* Новогодний подарок. Определить иерархию конфет и прочих сладостей.
// Создать несколько объектов-конфет. Собрать детский подарок с
// определением его веса. Провести сортировку конфет в подарке на основе
// одного из параметров. Найти конфету в подарке, соответствующую
// заданному диапазону параметров. */

class Candy {

    getName() {
        return this.name;
    }
    
    getWeight() {
        return this.weight;
    }

    getColor() {
        return this.color;
    }

    getColories() {
        return this.colories;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setColor(color) {
        this.color = color;
    }

    setColories(colories) {
        this.colories = colories;
    }
}

class Alenka extends Candy {
    constructor() {
        super();
        this.setName('Alenka');
        this.setWeight(10)
        this.setColor('black')
        this.setColories(150)
    }
}

class Grilyazh extends Candy {
    constructor() {
        super();
        this.setName('Grilyazh');
        this.setWeight(15)
        this.setColor('brown')
        this.setColories(80)
    }
}

class Twix extends Candy {
    constructor() {
        super();
        this.setName('Mishka');
        this.setWeight(9)
        this.setColor('yellow')
        this.setColories(180)
    }
}

class newYearGift {
    constructor() {
        this.candies = [];
    }

    addCandy(candy) {
        this.candies.push(candy);
    }

    getWeight() {
        return this.candies
            .map(candy => candy.getWeight())
            .reduce((a, b) => a + b)
    }

    sortByWeight() {
        return this.candies.sort((a, b) => a.weight - b.weight)
    }

    findByColories(minColories, maxColories) {
        return this.candies.filter(candy => {
            if (candy.colories <= minColories || candy.colories >= maxColories) {
                return candy;
            }
        })
    }
}

let newGift = new newYearGift();
newGift.addCandy(new Alenka());
newGift.addCandy(new Alenka());
newGift.addCandy(new Grilyazh());
newGift.addCandy(new Twix());

console.log(`newGift weight is ${newGift.getWeight()}`);


console.log(newGift.sortByWeight());
console.log(newGift.findByColories(50, 180));