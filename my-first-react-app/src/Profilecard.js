import React from 'react';

const ProfileCard = ({image,name,jobTitle,bio}) => {
    return(
        <div className='profile-card'>
            <img src={image} alt={`${name}'s profile`} className="profile-image" />
            <h2>{name}</h2>
            <p className="job-title">{jobTitle}</p>
            <p className="bio">{bio}</p>
        </div>
    )
}

export default ProfileCard;