 import { useState } from "react";
 import  AnimalShow  from "./AnimalShow"; 

 function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
 }
 console.log(getRandomAnimal());

function App () {
    const [animals, setAnimals] = useState([]);
    

    const [count, setCount] = useState(0);

    const handlClick = () => {
       setAnimals([...animals, getRandomAnimal()])         
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });

    return <div>
        {/* <button onClick={() =>console.log('button was clicked') }>Add Animal</button>  */}
        {/* This way of writing code is more concise and clean code rather than declaring a function outside and calling it inside a function whuch is too much code */}

<button onClick={handlClick}>Add Animal</button>
<div>{renderedAnimals}</div>

    </div>;
}

export default App; 