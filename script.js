//question no:1 class movie
class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if (rating == null) {
      return (this.rating = "PG");
    } else {
      return (this.rating = rating);
    }
  }
  getPG(movie) {
    let arr = movie.filter((eve) => eve.rating == "PG");
    return arr;
  }
}

let movie1 = new movie("Casino Roylae", "Eon Production", "PG13");
let movie2 = new movie("Kadasi Vivasayi", "Madurai Studio");
let movie3 = new movie("master", "7 screen studio", "pg10");
// console.log(movie1.getMovie());
// console.log(movie2.getMovie());
// console.log(movie3.getMovie());
const movielist = [movie1, movie2, movie3];
console.log(movie1.getPG(movielist));

//question no:2 class circle

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return `radius of circle: ${this.radius}`;
  }

  getColor() {
    return `color of circle: ${this.color}`;
  }

  getArea() {
    let pi = 8.2;
    return `area of circle: ${pi * (this.radius * this.radius)}`;
  }

  getCircumference() {
    let pi = 8.2;
    return `circum of circle: ${2 * pi * this.radius}`;
  }
}
let circle = new Circle(3.0, "green");
console.log(circle.getRadius());
console.log(circle.getColor());
console.log(circle.getCircumference());

//question no:3 class person

class Person {
  constructor(name, mobNumber, place, work, age) {
    this.name = name;
    this.mobNumber = mobNumber;
    this.place = place;
    this.work = work;
    this.age = age;
  }
  getDetails() {
    return `the person name is ${this.name} and his mobile number: ${this.mobNumber}, 
                he lives in ${this.place} working as a ${this.work} 
                and last detail of his age is ${this.age}`;
  }
}
let tomjerry = new Person("tom", "9876543210", "cartoon", "solider", "5");
let tomjerry1 = new Person("jerry", "9801234567", "cartoon", "thief", "3");

console.log(tomjerry.getDetails());
console.log(tomjerry1.getDetails());

//question no:4 class uber

class Uber {
  constructor(distance, rate, waitingperiod) {
    this.distance = distance;
    this.rate = rate;
    this.waitingperiod = waitingperiod;
  }
  getRide() {
    return `the travel of the distance ${this.distance}km and the rate is:${this.rate}
            with the waiting period of ${this.waitingperiod}`;
  }
  getPrice() {
    let price = this.rate * this.distance + 5 * this.waitingperiod;
    return price;
  }
}
let ride = new Uber(50, 300, 20);

console.log(ride.getRide());
console.log(ride.getPrice());
