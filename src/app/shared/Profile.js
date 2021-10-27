import React from 'react'
import '../../profile.css'
const Profile = () => {
    return (
     <div>
        <section class="profile">
  <header class="header">
    <div class="details">
      <img src="https://static.thenounproject.com/png/1121885-200.png" />
      <h1 class="heading">Aravind</h1>
      <div class="location">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
</svg>
        <p>chennai, India</p>
      </div>
      <div class="stats">
        <div class="col-4">
          <h4>20</h4>
          <p>Reviews</p>
        </div>
        <div class="col-4">
          <h4>10</h4>
          <p>Communities</p>
        </div>
        <div class="col-4">
          <h4>100</h4>
          <p>Discussions</p>
        </div>
      </div>
    </div>
  </header>
</section>
     </div>
    )
}

export default Profile
