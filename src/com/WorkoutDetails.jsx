import { useWorkoutContext } from "../hooks/UseWorkoutContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()

    const handleDelete = async () => {
        const response = await fetch('api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return ( 
        <div className="flow card"> 
            <h4 className="fs-300 fw-600 text-primary">{workout.title}</h4>
            <div>
                <p className="text-paragraph"><span className="fw-600 text-black">Load (kg):</span> {workout.load}</p>
                <p className="text-paragraph"><span className="fw-600 text-black">Reps:</span> {workout.reps}</p>
                <p className="text-paragraph">{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true}) }</p>
               
            </div>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default WorkoutDetails;