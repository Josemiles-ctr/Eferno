import './Team.css';
import aitaImg from '../assets/Team/aita.jpg';
import otaiImg from '../assets/Team/otaijoseph.jpg';
import namugerwaaImg from '../assets/Team/namugerwa.jpg';
import mukisaImg from '../assets/Team/mukisa.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Aita Joshua',
      role: 'Technology & System Architecture Lead',
      icon: 'architecture',
      degree: 'BSc. Software Engineering',
      avatar: aitaImg
    },
    {
      name: 'Otai Joseph',
      role: 'Design and User Experience Expert',
      icon: 'palette',
      degree: 'BSc. Software Engineering',
      avatar: otaiImg
    },
    {
      name: 'Namugerwa Precious',
      role: 'HR and Marketing',
      icon: 'people',
      degree: 'BSc. Software Engineering',
      avatar: namugerwaaImg
    },
    {
      name: 'Mukisa Ben Ezra',
      role: 'Product Strategist',
      icon: 'lightbulb',
      degree: 'BSc. Software Engineering',
      avatar: mukisaImg
    },
    {
      name: 'Wamani Joshua',
      role: 'Data and Insight Lead',
      icon: 'analytics',
      degree: 'BSc. Software Engineering',
      avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=WamaniJoshua&backgroundColor=0066cc&baseColor=d08b5b'
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
                  className={`avatar-img ${member.name === 'Namugerwa Precious' ? 'avatar-namugerwa' : ''}`}
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
