// 1) hoisting
console.log(calcAge(2003), 'Hoisting');

function calcAge(birthYear) {
    return 2024 - birthYear;
}

// სანამ ჯავასკრიპტის კოდი შესრულდება ინტერპრეტატორი ასკანერებს მთლიან კოდს და თითოეული
// ფუნქციის და ცვალდის დეკლრაციისთვის ქმნის ახალ ფროფერთის ცვლადების ობიექტში (VO) 
// მის მმნიშვნელობას კი იმის მიხედვით ანიჭებს თუ როგორ გვაქვს ეს ცვლადი შექმნი 
// ფუქნის დეკლარაცის შემთხვევაში შეგვიძლია მისი გამოძახება მის შექმნამდე 


console.log('------ 2) with constructor --------');
// 2)
const Shape = function(name) {
    this.name = name;
};
Shape.prototype.area = function() {
    return 'area calculation not implemented for generic shape'
};

// circle
const Circle = function(name, radius) {
    Shape.call(this, name);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return `Area of Circle: ${Math.PI * this.radius * this.radius}`;
};

// const circle = new Circle('circule', 4);
// console.log(circle.area());


// rectangle
const Rectangle = function(name, width, height) {
    Shape.call(this, name);
    this.width = width;
    this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return `Area of Rectangle: ${this.height * this.width}`;
};

// const rectangle = new Rectangle('regtangle', 20, 20);
// console.log(rectangle.area());


// Triangle 
const Triangle = function(name, base, height) {
    Shape.call(this, name);
    this.base = base;
    this.height = height;
};
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return `Area of Triangle ${(this.base * this.height) / 2}`;
};

// const triangle = new Triangle('triangle', 2, 3);
// console.log(triangle.area());


const shapes = [new Circle('circule', 4), new Rectangle('regtangle', 20, 20), new Triangle('triangle', 2, 3), new Shape()];
shapes.forEach(shape => console.log(shape.area()));





