import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Mukisa Ben Ezra',
      role: 'Lead Software Engineer',
      icon: 'person',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=MukisaBenEzra&backgroundColor=667eea&baseColor=ac6651'
    },
    {
      name: 'Otai Joseph',
      role: 'Full Stack Developer',
      icon: 'code',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=OtaiJoseph&backgroundColor=764ba2&baseColor=f9c9b6'
    },
    {
      name: 'Aita Joshua Prince',
      role: 'Backend Engineer',
      icon: 'dns',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=AitaJoshuaPrince&backgroundColor=667eea&baseColor=ac6651'
    },
    {
      name: 'Wamani Joshua',
      role: 'Frontend Developer',
      icon: 'web',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=WamaniJoshua&backgroundColor=764ba2&baseColor=d08b5b'
    },
    {
      name: 'Namugerwa Precious',
      role: 'UI/UX Engineer',
      icon: 'palette',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=NamugerwaPrecious&backgroundColor=f093fb&baseColor=ffdbb4'
    }
  ];

  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Talented Software Engineers dedicated to revolutionizing your shopping experience
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="avatar-img"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-degree">{member.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
