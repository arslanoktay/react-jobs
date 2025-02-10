import React from 'react'
import Hero from '../componenents/Hero'
import HomeCards from '../componenents/HomeCards'
import JobListings from '../componenents/JobListings'
import ViewAllJobs from '../componenents/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage