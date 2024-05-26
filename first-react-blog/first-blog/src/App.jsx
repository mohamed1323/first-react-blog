import React from 'react'
import Blog from './Blogs/Blog'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Postitem from './Postitem/Postitem'
import Postlist from './Postlist/Postlist'
import BlogContext from './content/BlogContext'



function App() {
  return (
    <div>
        <Header/>
     <Blog/>
     <Footer/>
     <Postitem/>
     <Postlist/>
     <BlogContext/>
    
      
    </div>
  )
}

export default App
