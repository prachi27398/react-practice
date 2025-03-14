import './App.css';
import ProfileCard from './Profilecard';

function App() {
  const profiles = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      jobTitle:"Frontend Developer",
      bio:"Passionate about creating user-friendly web applications."
    },
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Jane Smith",
      jobTitle: "Backend Developer",
      bio: "Specializes in database architecture and cloud computing."
    },
    {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Alice Johnson",
      jobTitle: "UX/UI Designer",
      bio: "Loves designing intuitive and engaging user interfaces."
    }
  ];
  return (
    <div className="App">
     
       <h1>Team  Profiles</h1>
       {profiles.map((profile, index) => (
        <ProfileCard 
          key={index} 
          image={profile.image} 
          name={profile.name} 
          jobTitle={profile.jobTitle} 
          bio={profile.bio} 
        />
      ))}

    </div>
  );
}



export default App;
