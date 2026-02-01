let user1 = {
  userName: "laila",
  phone: "0795718154",
};

let user2 = {
  favColor: "red",
  isAdmen: false,
  city: "irbed",
};
let user3 = {
  favSub: "math",
  city: "amman",
  favColor: "aaa",
};

let user4 = Object.create(user1);
let user5 = Object.assign(user2, user3);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

console.log((user1.userName = "adel"));
console.log((user1.age = 22));

// console.log((user2.favColor = "blue"));
console.log((user2.number2 = "07756432"));

console.log((user3.city = "irbid"));
console.log((user3.country = "jordan"));

console.log(user4.userName);
console.log((user4.name2 = "asaad"));
console.log((user4.blabla = "aaa"));

console.log(user5.age);
console.log((user5.name3 = "abdAdel"));
