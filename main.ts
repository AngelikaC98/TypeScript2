const persons = [

    {
        name: "Marlie Riden",
        dateOfBirth: new Date (11/22/1989),
        children: 5,
        country: "Indonesia",
        knowsProgramming: false
    },
    {
        name: "Carolann Ramsby",
        dateOfBirth: 7/10/1978,
        children: 0,
        country: "Indonesia",
        knowsProgramming: false
    },
    {
        name: "Lenna Fencott",
        dateOfBirth: 5/9/1995,
        children: 4,
        country: "Brazil",
        knowsprogramming: false
    },
    {
        name: "Ebeneser Fealey",
        dateOfBirth: 2/20/1996,
        children: 4,
        country: "Ukraine",
        knowsProgramming: true
    },
    { 
        name: "Rich Burdfield",
        dateOfBirth: new Date(4/20/1997),
        children: 4,
        country: "Poland",
        knowsProgramming: false
    }
]

//This is showing who is older or younger.
if(persons[0].dateOfBirth > persons[1].dateOfBirth) { 
    console.log("The first person is older than the last person.");
}
else {
    console.log("The first person is younger or the same age as the last person.");
  }

//Here I was checking if persons have the same amount of children.
  if(persons[1].children === persons[2].children){
        console.log("The 2nd person has the same amount of children as the 3rd person.")
  }
 else {
    console.log("The 2nd person does not have the same amount of children as the 3rd person.")
  }

//In this code I wanna see who knows programming and I put specific words, if person know programming or not. 
  if(persons[0].knowsProgramming && persons[3].knowsProgramming){
        console.log("Yay!")
  }
  else{
    console.log("LMGTFY.")
  }

//In this situation I wonna check how 2nd person will greet in what language
  switch(persons[1].country){
    case "Iceland": 
        console.log("Hæ!")
    break;

    case "Spain":
        console.log("Hola!")
    break;

    case "Korea":
        console.log("여보세요")
    break;

    default: 
        console.log("Hello!")
  }

//In this code I wanna see if 2nd person has longer name than 5 characters
  if(persons[1].name.length > 5){
    console.log("The name of 2nd person is longer than 5 characters.")
  }
  else
  { 
    console.log("The person has less than 5 characters.")
  }