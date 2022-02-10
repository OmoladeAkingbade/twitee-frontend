import "./homePage.css"
// import TwitterIcon from '@mui/icons-material/Home';
// import sidebarOptions from './sidebarOptions';
// import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"


const homePage = () => {
  return (
    <div className='wrapper'>
      <div className="home">
        
        <div className="sidebar"> 
          <div>Home</div>
          <div>Explore</div>
          <div>Notifications</div>
          <div>Messages</div>
          <div>Bookmarks</div>
          <div>Lists</div>
          <div>Profile</div>
          <div>More</div>
       
          <button>Tweet</button>
        </div>
        
        <div className="feed"> 
          <div>
            home
            logo
          </div>
        </div>
        <div className="widgets"> widgets </div>

      </div>
    </div>
  )
}


export default homePage