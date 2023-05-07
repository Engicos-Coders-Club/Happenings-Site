import ParticipantCard from "./ParticipantCard";


//edit add   name no id  participants

function participants() {
  return (
    <section className='min-h-screen '>

        <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-5/6 md:w-[350px] mt-6">
          <h1
            className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            participants
          </h1>
        </div>
        <div className=" mt-10 flex items-center justify-center">
            
            <button
              className="text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-md hover:text-white hover:bg-orange-600 hover:scale-105 uppercase cursor-pointer text-2xl tracking-wide"
              style={{ fontFamily: "Mangogrotesque" }}
            >
                Add +
            </button>
          </div>
        <div className="w-[80vw] md:w-[60vw] mx-auto pt-8">
          
          <div className="flex flex-wrap gap-2 md:gap-x-10 mt-4 justify-center md:justify-start">
            
            
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
           
           


          </div>
        </div>
    </section>
  )
}


export default participants;