With object literals
const Address = {
  street: "xxxx",
  city: "Chennai",
  zipCode: 600053,

  showAddress: function () {
    return `
        Street: ${this.street}
        City: ${this.city}
        Zipcode: ${this.zipCode}`;
  },
};

Factory Function

function factoryAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,

showAddress: function () {
  return `
    Street: ${this.street}
    City: ${this.city}
    Zipcode: ${this.zipCode}`;
},
  };
}

const Address1 = factoryAddress("xxxx", "Chennai", 600053);

console.log(Address1.showAddress())

Constructor Function

function address(street, city, zipCode) {
  (this.street = street),
    (this.city = city),
    (this.zipCode = zipCode),
    (this.showAddress = function () {
      return `
        Street: ${this.street}
        City: ${this.city}
        Zipcode: ${this.zipCode}`;
    });
}

address2 = new address("xxxxx", "Chennai", 600053);

console.log(address2.showAddress());

const movieDb = [
  { name: "In Bruges", rating: 5, watched: true },
  { name: "Frozen", rating: 4.5, watched: false },
  { name: "Mad Max Fury Road", rating: 5, watched: true },
  { name: "Les Mise", rating: 3.5, watched: false },
];

for (let index of movieDb) {
  console.log(
    `You have ${index.watched ? "seen" : "not seen"} "${index.name}" - ${
      index.rating
    } stars `
  );
}
