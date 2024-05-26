import { useEffect} from "react";
import WorkoutDetails from "../com/WorkoutDetails";
import WorkoutForms from "../com/WorkoutForms";
import { useWorkoutContext } from "../hooks/UseWorkoutContext";

const API_URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext()

    useEffect(()=>{
      const fetchWorkouts = async () =>{
        try {
            const response = await fetch(`${API_URL}/api/workouts`);
            const json = await response.json();

            if (response.ok) {
               dispatch({type: 'SET_WORKOUTS', payload: json})
            } else {
              // Handle error if needed
              console.log('Error fetching workouts:', json);
            }
          } catch (error) {
            // Handle network error or other exceptions
            console.error('Error fetching workouts:', error);
          }
        };
      fetchWorkouts()
    },[dispatch])

     console.log(workouts)
    return ( 
        <div className="container_padding layout--home">
            {
            workouts 
            ? 
            <div className="flow">
              {workouts.map((workout)=>(
                <div key={workout._id} className="workout-details">
                 <WorkoutDetails workout={workout}/>
                </div>
              ))}
            </div> 
            : 
            <div>
              <p>loading...</p>
            </div>
            }
            <div>
              <WorkoutForms/>
            </div>
        </div>
     );
}
 
export default Home;