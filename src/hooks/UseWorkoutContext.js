import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutContext = () => {
     const context = useContext(WorkoutsContext)
     if(!context)
     { 
        throw Error('useworkoutcontext must be used inside an workoutcontextprovider')
     }
     return context 
}