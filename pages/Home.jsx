import React from 'react'
import sidebar from '../component/sidebar'
import chat from '../component/chat'
const Home = () =>{
    return(
        <div className='Home'>
            <div className="container">
            <sidebar/>
            <chat/>
            </div>
            </div>
    )
}
export default Home;