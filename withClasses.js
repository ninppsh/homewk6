

console.log('------ 2) with Classes --------');
// 2)
class Shape1 {
    constructor(name) {
        this.name = name;
    }

    area() {
        return 'area calculation not implemented for generic shape'
    }
};

class Circle1 extends Shape1 {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    area() {
        return `Area of Circle: ${Math.PI * this.radius * this.radius}`;
    }
};

class Rectangle1 extends Shape1 {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return `Area of Rectangle: ${this.height * this.width}`;
    }
};

class Triangle1 extends Shape1 {
    constructor(name, base, height) {
        super(name);
        this.base = base; 
        this.height = height;
    }

    area() {
        return `Area of Triangle ${(this.base * this.height) / 2}`;
    }
};

const shapes1 = [new Circle1('circule', 4), new Rectangle1('regtangle', 20, 20), new Triangle1('triangle', 2, 3), new Shape1()];
shapes1.forEach(shape => console.log(shape.area()));