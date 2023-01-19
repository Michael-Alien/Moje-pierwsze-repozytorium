const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];

function getFavouriteColour(person, number) {
  const Suma =
    person.firstName.length + person.lastName.length + person.nickname.length;
  const Colour = (Suma - number) % colours.length;
  if (number > 30) {
    return "Podałeś za dużą liczbę, liczba nie może być większa niż 30";
  }
  if (number < 1) {
    return "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1";
  } else if (number === undefined) 
  return colours[5];
}

const colours = ["red", "green", "yellow", "blue", "pink", "orange"];

for (const i of people) {
  console.log(getFavouriteColour(i, 5));
}
