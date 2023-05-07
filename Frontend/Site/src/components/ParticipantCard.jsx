import Avatar from '../assets/Avatar.png'

function participantCard(props) {
  return (
            <>
            <div className="bg-[#F8E0B7] p-2">
                <div>
                    <img src={Avatar} alt="" width={"100%"}/>
                </div>
                <div className="bg-red-950 text-white p-2">
                    <p className="text-lg">John</p>
                    <p className="text-lg">+91 8934637284</p>
                    
                </div>
                <div className="flex flex-col w-3/4 mx-auto">
                    <button className="text-red-950 border-2 border-red-950 my-2 px-4 py-2 rounded-md hover:text-white hover:bg-red-950 hover:scale-105 uppercase cursor-pointer text-base tracking-wide">Edit</button>
                    <button className="text-red-950 border-2 border-red-950 my-2 px-4 py-2 rounded-md hover:text-white hover:bg-red-950 hover:scale-105 uppercase cursor-pointer text-base tracking-wide">Delete</button>
                </div>
            </div>
            </>
      )
    }

export default participantCard;