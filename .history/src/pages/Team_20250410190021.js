import React from 'react';
import './Team.css';

function Team() {
  const teamMembers = [
    {
      name: "Jansen Relator",
      role: "Machine Learning Engineer",
      description: "Specializes in developing and optimizing machine learning models.",
      image: "images/jansen.png"
    },
    {
      name: "Claire Belle Candia",
      role: "Frontend Developer",
      description: "Focuses on creating user-friendly interfaces and experiences.",
      image: "images/profile.jpg"
    },
    {
      name: "Anthony Nemenzo",
      role: "Backend Developer",
      description: "Expert in building scalable and efficient server-side applications.",
      image: "images/profile.jpg"
    },
    {
      name: "Joren Varquez",
      role: "Project Manager",
      description: "Ensures timely delivery and smooth collaboration across the team.",
      image: "images/profile.jpg"
    }
  ];

  return (
    <div className="team-container">
      <h2>MEET THE TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} className="team-member-image" />
            <h3>{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;