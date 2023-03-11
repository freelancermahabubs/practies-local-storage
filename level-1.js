const setItems = () =>{
 const name = localStorage.setItem('name', 'Shakib');
 const age = localStorage.setItem('age', '40');

};
const setObject = () =>{
const person = {firstName: "Abraham", lastName: "Lincoln"};
const personObj = localStorage.setItem('person', JSON.stringify(person));
const personString = localStorage.getItem(personObj);
const persono = JSON.parse(personString);
console.log(persono)
}




