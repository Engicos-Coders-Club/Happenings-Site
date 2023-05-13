import axios from "axios"
import '../axios'

export const checkCoordinator = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"CheckCoordinatorRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get("/api/check-if-coordinator/",{headers:{'Authorization':tokens}})
        dispatch({
            type:"CheckCoordinatorSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"CheckCoordinatorFailure",
            payload:error.response.data.detail
        })
    }    
}

export const registerCollege = (college, gsn, gsp, csn, csp,payment) => async (dispatch) => {
    try {
      dispatch({
        type: "CollegeRegisterationRequest",
      });
      let bodyFormData = new FormData();
      bodyFormData.append("college_name", college);
      bodyFormData.append("gs_name", gsn);
      bodyFormData.append("gs_number", gsp);
      bodyFormData.append("cs_name", csn);
      bodyFormData.append("cs_number", csp);
      bodyFormData.append("scrennshot", payment);

      const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

      const { data } = await axios.post(
        "/api/college-registration/",
        bodyFormData,
        {
          headers: { "Content-Type": "multipart/form-data","Authorization":tokens },
        }
      );

      dispatch({
        type: "CollegeRegisterationSuccess",
        payload: "College Registered Successfully",
      });
    } catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "CollegeRegisterationFailure",
        payload: error.response.data,
      });
    }
  };

  export const viewParticipants = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"ViewParticipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get("/api/view-registration-status/",{headers:{'Authorization':tokens}})
        dispatch({
            type:"ViewParticipantsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ViewParticipantsFailure",
            payload:error.response.data.detail
        })
    }    
}

export const registerEvent = (id,name,phone,idcard) => async (dispatch) => {
    try {
      dispatch({
        type: "AddParticipantRequest",
      });
      let bodyFormData = new FormData();
      bodyFormData.append("name", name);
      bodyFormData.append("phone", phone);
      bodyFormData.append("id_card", idcard);

      const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

      const { data } = await axios.post(
        `/api/event-registration/${id}/`,
        bodyFormData,
        {
          headers: { "Content-Type": "multipart/form-data","Authorization":tokens },
        }
      );

      dispatch({
        type: "AddParticipantSuccess",
        payload: data.message,
      });
    } catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "AddParticipantFailure",
        payload: error.response.data,
      });
    }
  };

  export const viewEventParticipants = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"ViewEventParticipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/view-event-participants/${id}`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"ViewEventParticipantsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ViewEventParticipantsFailure",
            payload:error.response.data.detail
        })
    }    
}

export const editParticipant = (id,name,phone,idcard)=>async(dispatch)=>{
    try {
        dispatch({
          type: "UpdateParticipantRequest",
        });
        let bodyFormData = new FormData();
        bodyFormData.append("name", name);
        bodyFormData.append("phone", phone);
        if(idcard)
          bodyFormData.append("id_card", idcard);
  
        const user = localStorage.getItem('user');
          let tokens = ''
          if (user) {
              const { token } = JSON.parse(localStorage.getItem('user'));
              tokens = `Bearer ${token}`;
          }
  
        const { data } = await axios.patch(
          `/api/update-participant-details/${id}/`,
          bodyFormData,
          {
            headers: { "Content-Type": "multipart/form-data","Authorization":tokens },
          }
        );
  
        dispatch({
          type: "UpdateParticipantSuccess",
          payload: "participant updated",
        });
      } catch (error) {
        console.log(error.response.data, error.response.status);
        dispatch({
          type: "UpdateParticipantFailure",
          payload: error.response.data,
        });
      }   
}

export const removeParticipant = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"RemoveParticipantRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        await axios.delete(`/api/delete-participant/${id}`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"RemoveParticipantSuccess",
            payload:"Participant removed"
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"RemoveParticipantFailure",
            payload:error.response.data.detail
        })
    }    
}