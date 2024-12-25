console.log('------ 2) with 0bject.create --------')
const Shape2 = {
    area () {
        return 'area calculation not implemented for generic shape';
    },

    init(name) {
        this.name = name;
    }
};
const shape2 = Object.create(Shape2);

// circle
const Circle2 = Object.create(Shape2);
Circle2.init = function(name, radius) {
    Shape2.init.call(this, name);
    this.radius = radius;
};
Circle2.area = function() {
    Shape2.area(this);
    return `Area of Circle: ${Math.PI * this.radius * this.radius}`;
};

const circle2 = Object.create(Circle2);
circle2.init('circle', 4);


// rectangle
const Rectangle2 = Object.create(Shape2);
Rectangle2.init = function(name, width, height) {
    Shape2.init.call(this, name);
    this.width = width;
    this.height = height;
};
Rectangle2.area = function() {
    Shape2.area(this);
    return `Area of Rectangle: ${this.height * this.width}`;
};

const rectangle2 = Object.create(Rectangle2);
rectangle2.init('rectangle', 20, 20);

// triangle
const Triangle2 = Object.create(Shape2);
Triangle2.init = function(name, base, height) {
    Shape2.init.call(this, name);
    this.base = base;
    this.height = height;
};

Triangle2.area = function() {
    Shape2.area(this);
    return `Area of Triangle ${(this.base * this.height) / 2}`;
};

const triangle2 = Object.create(Triangle2);
triangle2.init('triangle', 9, 3);

//
const shapes2 = [circle2, rectangle2, triangle2, shape2];
shapes2.forEach(shape => console.log(shape.area()));


