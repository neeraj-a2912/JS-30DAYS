const reviews = [
  {
    author: "Aloney Neeraj",
    review:
      "Amazing food. PERIOD. Service is always perfect, food is always on point, and the staff is very friendly and accommodating. Always looking forward to this place with my friends, the fried vanilla ice cream is exceptionally good!",
  },
  {
    author: "John Doe",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
  },
  {
    author: "Jane Doe",
    review:
      "This restaurant is a must-visit! The food is amazing and the atmosphere is very inviting. I highly recommend it.",
  },
  {
    author: "Mike Smith",
    review:
      "I had a wonderful dining experience at this restaurant. The food was cooked to perfection and the service was impeccable. I will definitely be back!",
  },
  {
    author: "Susan Jones",
    review:
      "This restaurant is a real hidden gem. The food is absolutely delicious and the prices are very reasonable. I highly recommend it!",
  },
  {
    author: "David Williams",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
  },
  {
    author: "Sarah Brown",
    review:
      "This restaurant is a must-visit! The food is amazing and the atmosphere is very inviting. I highly recommend it.",
  },
  {
    author: "Mark Green",
    review:
      "I had a wonderful dining experience at this restaurant. The food was cooked to perfection and the service was impeccable. I will definitely be back!",
  },
  {
    author: "Lisa Miller",
    review:
      "This restaurant is a real hidden gem. The food is absolutely delicious and the prices are very reasonable. I highly recommend it!",
  },
  {
    author: "James Anderson",
    review:
      "I had a great time at this restaurant. The food was delicious and the service was excellent. I would definitely recommend it to others.",
  },
];

const author = document.getElementById("authorName");
const reviewText = document.getElementById("text");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const surprise = document.getElementById("surprise");

let currentItem = 0;

function showItem() {
  author.textContent = reviews[currentItem].author;
  reviewText.textContent = reviews[currentItem].review;
}
prev.addEventListener("click", function () {
  currentItem--;
  showItem();
});

next.addEventListener("click", function () {
  currentItem++;
  showItem();
});

surprise.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showItem();
});
