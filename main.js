var persons = [
    {
        name: "Marlie Riden",
        dateOfBirth: new Date(11 / 22 / 1989),
        children: 5,
        country: "Indonesia",
        knowsProgramming: false
    },
    {
        name: "Carolann Ramsby",
        dateOfBirth: 7 / 10 / 1978,
        children: 0,
        country: "Indonesia",
        knowsProgramming: false
    },
    {
        name: "Lenna Fencott",
        dateOfBirth: 5 / 9 / 1995,
        children: 4,
        country: "Brazil",
        knowsprogramming: false
    },
    {
        name: "Ebeneser Fealey",
        dateOfBirth: 2 / 20 / 1996,
        children: 4,
        country: "Ukraine",
        knowsProgramming: true
    },
    {
        name: "Rich Burdfield",
        dateOfBirth: new Date(4 / 20 / 1997),
        children: 4,
        country: "Poland",
        knowsProgramming: false
    }
];
if (persons[0].dateOfBirth > persons[1].dateOfBirth) {
    console.log("The first person is older than the last person.");
}
else {
    console.log("The first person is younger than or the same age as the last person.");
}
if (persons[1].children === persons[2].children) {
    console.log("The 2nd person has the same amount of children as the 3rd person.");
}
else {
    console.log("The 2nd person does not have the same amount of children as the 3rd person.");
}
if (persons[0].knowsProgramming && persons[3].knowsProgramming) {
    console.log("Yay!");
}
else {
    console.log("LMGTFY.");
}
switch (persons[1].country) {
    case "Iceland":
        console.log("Hæ!");
        break;
    case "Spain":
        console.log("Hola!");
        break;
    case "Korea":
        console.log("여보세요");
        break;
    default:
        console.log("Hello!");
}
if (persons[1].name.length > 5) {
    console.log("The name of 2nd person is longer than 5 characters.");
}
else {
    console.log("The person has less than 5 characters.");
}
