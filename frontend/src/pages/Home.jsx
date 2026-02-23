import React from 'react'

const Home = () => {
    const userdata = localStorage.getItem('userdata');
  return (
    <div>
        <h1>Welcome,{userdata}</h1>
    </div>
  )
}

export default Home