import { useRef, useState } from "react";
import { useWorkoutContext } from "../hooks/UseWorkoutContext";

const API_URL = process.env.REACT_APP_API_URL;

const WorkoutForms = () => {
    const {dispatch} = useWorkoutContext()
    const [formData, setFormData] = useState({
        title:"",
        load:"",
        reps:"",
    })

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    
    const UpdateForm = (change) =>{
        setFormData((prevData)=>({...prevData, ...change}))
    }

    const formRef = useRef()

     const handleSubmit = async (e) =>{
       e.preventDefault()
       const response = await fetch(`${API_URL}/api/workouts`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
       })

       const json = await response.json()

       if(!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
       }

       if(response.ok) {
        setError(null)
        setFormData({
            title: "",
            load: "",
            reps: "",
          });
          setEmptyFields([])
         dispatch({type: 'CREATE_WORKOUT', payload: json})
          formRef.current.reset()
       }
     }

    return ( 
       <div className="workout-form flow">
        <h2 className="fs-300 fw-800 capital">add new workout</h2>

            <form action="" className="flow" onSubmit={handleSubmit} ref={formRef}>
             <div>
                <label htmlFor="title" className="capital">excersize title</label>
                <input type="text" name="title" id="title" 
                onChange={(e)=>{UpdateForm({title:e.target.value})}} 
                value={formData.title}
                className={emptyFields.includes('title') ? 'error' : ''}
                />
             </div>
             <div>
                <label htmlFor="load">Load (in kg):</label>
                <input type="number" name="load" id="load" 
                onChange={(e)=>{UpdateForm({load:e.target.value})}} 
                value={formData.load}
                className={emptyFields.includes('load') ? 'error' : ''}
                />
             </div>
             <div>
                <label htmlFor="reps">Reps:</label>
                <input type="number" name="reps" id="reps" 
                onChange={(e)=>{UpdateForm({reps:e.target.value})}} 
                value={formData.reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
                />
             </div>
             <button type="submit" className="capital btn-primary" data-type="primary">add workout</button>
             {
                error && 
                <div className="error">
                    <p>{error}</p>
                </div>
            
             }
            </form>
        </div>
     );
}
 
export default WorkoutForms;