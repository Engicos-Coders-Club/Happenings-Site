import { useNavigate } from 'react-router-dom'
import Avatar from '../assets/Avatar.png'
import { useDispatch } from 'react-redux'
import { removeParticipant,viewEventParticipants } from '../actions/college'

function participantCard({member,event_id}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEdit = () =>{
        navigate('/event-registration',{state:{event_id:event_id,applied:true,participant:member}})
    }
    const handleDelete = async() =>{
        await dispatch(removeParticipant(member.id))
        dispatch(viewEventParticipants(event_id))
    }

  return (
            <>
            <div className="bg-[#F8E0B7] p-2">
                <div>
                    <img src={member.id_card} alt="" width={"100%"}/>
                </div>
                <div className="bg-red-950 text-white p-2">
                    <p className="text-lg">{member.name}</p>
                    <p className="text-lg">{member.phone}</p>
                    
                </div>
                <div className="flex flex-col w-3/4 mx-auto">
                    <button onClick={handleEdit} className="text-red-950 border-2 border-red-950 my-2 px-4 py-2 rounded-md hover:text-white hover:bg-red-950 hover:scale-105 uppercase cursor-pointer text-base tracking-wide">Edit</button>
                    <button onClick={handleDelete} className="text-red-950 border-2 border-red-950 my-2 px-4 py-2 rounded-md hover:text-white hover:bg-red-950 hover:scale-105 uppercase cursor-pointer text-base tracking-wide">Delete</button>
                </div>
            </div>
            </>
      )
    }

export default participantCard;