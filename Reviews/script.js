const reviews = [
  {
    author: "Neeraj",
    review:
      "Amazing food. PERIOD. Service is always perfect, food is always on point, and the staff is very friendly and accommodating. Always looking forward to this place with my friends, the fried vanilla ice cream is exceptionally good!",
    city: "New York, NY",
  },
  {
    author: "John Doe",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
    city: "London, England",
  },
  {
    author: "Jane Doe",
    review:
      "This restaurant is a must-visit! The food is amazing and the atmosphere is very inviting. I highly recommend it.",
    city: "Paris, France",
  },
  {
    author: "Mike Smith",
    review:
      "I had a wonderful dining experience at this restaurant. The food was cooked to perfection and the service was impeccable. I will definitely be back!",
    city: "Tokyo, Japan",
  },
  {
    author: "Susan Jones",
    review:
      "This restaurant is a real hidden gem. The food is absolutely delicious and the prices are very reasonable. I highly recommend it!",
    city: "Sydney, Australia",
  },
  {
    author: "David Williams",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
    city: "Cape Town, South Africa",
  },
  {
    author: "Sarah Brown",
    review:
      "This restaurant is a must-visit! The food is amazing and the atmosphere is very inviting. I highly recommend it.",
    city: "Rio de Janeiro, Brazil",
  },
  {
    author: "Mark Green",
    review:
      "I had a wonderful dining experience at this restaurant. The food was cooked to perfection and the service was impeccable. I will definitely be back!",
    city: "Rome, Italy",
  },
  {
    author: "Lisa Miller",
    review:
      "This restaurant is a real hidden gem. The food is absolutely delicious and the prices are very reasonable. I highly recommend it!",
    city: "Barcelona, Spain",
  },
  {
    author: "James Anderson",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
    city: "Berlin, Germany",
  },
];

// const images = [
//   "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

// const pfp = document.getElementById("pfp");
const author = document.getElementById("authorName");
const reviewText = document.getElementById("text");
const city = document.getElementById("city");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const surprise = document.getElementById("surprise");

let currentItem = 0;

function showItem() {
  author.textContent = reviews[currentItem].author;
  reviewText.textContent = reviews[currentItem].review.substring(0,100)+"...";
  city.textContent = reviews[currentItem].city;
}

window.addEventListener("load", function () {
  currentItem = 0;
  showItem();
});

prev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showItem();
});

next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showItem();
});

surprise.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showItem();
});
