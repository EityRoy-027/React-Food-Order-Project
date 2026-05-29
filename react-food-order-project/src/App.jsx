

function App() {
 
  const handleMenu = () =>{
    alert("Food Menu Opened")
  }

  const handleRezela = () =>{
    alert("Mutton Rezela Ordered")
  }

  const handleRoast = () =>{
    alert("Chicken Roast Ordered")
  }

  const handleBurger = () =>{
    alert("Chicken Burger Ordered")
  }
  return (
    <>
  

   <div className="h-screen flex flex-col justify-center items-center">

   

   <div className="w-[400px] h-[400px] rounded-md bg-gray-300 flex flex-col justify-center" onClick={handleMenu}>

   <h1 className="font-bold text-3xl w-full flex justify-center pt-5">Food Menu</h1> 

   <div className="w-full h-full rounded-md bg-gray-300 flex flex-col justify-center items-center gap-4">

   <button onClick={handleRezela} className="px-4 py-4 bg-red-600 rounded-md text-white font-bold ">Mutton Rezela</button>  

   <button onClick={handleBurger} className="px-4 py-4 bg-red-600 rounded-md text-white font-bold "> Chicken Burger</button>

   <button onClick={handleRoast} className="px-5 py-4 bg-red-600 rounded-md text-white font-bold ">Chicken Roast</button>

   </div>

   </div>

   </div>


    </>
  )
}

export default App
