import { createSlice } from '@reduxjs/toolkit';
import { jobData } from '../assets';

const filterTypes= {
    minExp:"",
    companyName:"",
    location:"",
    locationType:"",
    techStack:"",
    role:"",
    minBasePay:""
}

const initialState= {
    jobs:jobData,
    filteredJobs:jobData
    

}

const jobsSlice= createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setFilter:(state,action)=>{
            const {minExp,companyName,location,locationType,techStack,role}= action.payload
            state.filteredJobs= state.jobs.filter(job=>{
                return (
                (location?job.location.includes(location):true) && 
                (minExp?job.minExp>=minExp:true)&&
                (role?job.jobRole.includes(role):true)
                )
            })
        }
    }
})

export const {setFilter} = jobsSlice.actions
export default jobsSlice.reducer