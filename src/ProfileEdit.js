import React from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {
  return (
    <div className="profile-edit-container">
      <div className="profile-edit-card">
        <h2>Edit your Profile</h2>
        <img src="https://img.ibxk.com.br/2021/07/07/07163433433366.jpg" alt="Avatar" className="avatar" />
        <form>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" name="username" value="Miles Moralis" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value="josinjoy1@gmail.com" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="uniqueId">Unique ID</label>
            <input type="text" id="uniqueId" name="uniqueId" value="dE8zS0xiKhep7tKGpI5E6psvlLh2" readOnly />
          </div>
          <div className="form-group">
            <label>Who is Watching?</label>
            <div className="watching-icons">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Icon 1" />
              <img src="https://ih0.redbubble.net/image.618393699.1999/flat,800x800,075,f.u2.jpg" alt="Icon 2" />
              <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="Icon 3" />
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt="Icon 4" />
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="signout-btn">Sign Out</button>
            <button type="button" className="home-btn">Back to Home</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
