

function PokemonDetails({ pokemon }) {

    const { image, name, height, weight, speed, ex, attack } = pokemon

    return (
        <div className=" border-[1px] p-5 transition-transform transform hover:scale-105">
            <div>
                <div className=" flex justify-center">
                    <img className=" h-[100px] " src={image} alt="" />
                </div>
                <div>
                    <p className=" text-center text-2xl mt-3 font-semibold font-mono ">{name}</p>
                </div>
                <div className=" flex justify-center mt-6">
                    <div className=" grid grid-cols-2 gap-2 ">
                        <p className=" font-serif border-[1px] w-[120px] p-1 h-[40px] ">height: {height} </p>
                        <p className=" font-serif border-[1px] w-[120px] p-1 h-[40px] ">weight: {weight} </p>
                        <p className=" font-serif border-[1px] w-[120px] p-1 h-[40px] ">speed: {speed} </p>
                        <p className=" font-serif border-[1px] w-[120px] p-1 h-[40px] ">ex: {ex} </p>
                        <p className=" font-serif border-[1px] w-[120px] p-1 h-[40px] ">attack: {attack} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails
