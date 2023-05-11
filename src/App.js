function App () {
    // const handleMouseMove = () => {
    //     console.log('Button was clicked!')
    // };
    return <div>
        <button onClick={() =>console.log('button was clicked') }>Add Animal</button> 
        {/* This way of writing code is more concise and clean code rather than declaring a function outside and calling it inside a function whuch is too much code */}
    </div>;
}

export default App;