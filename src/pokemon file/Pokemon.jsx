
//work api https://pokeapi.co/api/v2/pokemon?limit=124

//github https://github.com/thapatechnical/pokemon_thapa_react/blob/master/src/Pokemon.jsx

function Pokemon() {
    return (
        <div className=" m-16 ">

            <div>
                <div className=" flex justify-center items-center gap-2">
                    <img className=" h-[30px]  md:h-[60px] " src="https://cdn-icons-png.flaticon.com/128/188/188970.png" alt="" />
                    <p className=" text-center  text-xl md:text-6xl text-black font-serif ">Pokemon Power</p>
                </div>
                <div>
                    <input className=" w-full border-[1px] border-red-100 mt-5 h-[50px] rounded-lg p-3 " placeholder="Search Here" type="search" name="search" id="" />
                </div>












            </div>

        </div >
    )
}

export default Pokemon
