const greetingWithWeather = (name, weather) => {
  if (weather === "sunny") {
    console.log(`Chao ${name}! hom nay troi nang tuyet voi!`);
  } else if (weather === "rainy") {
    console.log(`Chao ${name}! hom nay troi mua, hang mang theo o!`);
  } else {
    console.log(`Chao ${name}! hom nay thoi tiet khong xac dinh!`);
  }
};

greetingWithWeather("Linh", "sunny");
greetingWithWeather("Linh", "rainy");
greetingWithWeather("Linh", "c");
