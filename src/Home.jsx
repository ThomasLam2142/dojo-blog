const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas',e);
    }

    const handleClickAgain = (name,e) =>{
        console.log('hello',name,e);
    
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click Again</button>
        </div>
     );
}
 
export default Home;