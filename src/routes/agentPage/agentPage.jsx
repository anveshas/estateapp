import React from 'react';

const AgentPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Meet Our Agents</h1>
      <p style={styles.paragraph}>
        Our team of experienced agents is dedicated to helping you achieve your real estate goals.
        Whether you are buying, selling, or renting, our agents are here to provide personalized
        service and expert guidance every step of the way.
      </p>
      <h2 style={styles.subHeading}>Agent Profiles</h2>
      <div style={styles.agentContainer}>
        <div style={styles.agent}>
          <h3 style={styles.agentName}>Agent Name</h3>
          <p style={styles.agentDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla convallis libero in dui lacinia, non iaculis ligula maximus.
            Fusce et mi at ipsum volutpat gravida.
          </p>
        </div>
        <div style={styles.agent}>
          <h3 style={styles.agentName}>Agent Name</h3>
          <p style={styles.agentDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla convallis libero in dui lacinia, non iaculis ligula maximus.
            Fusce et mi at ipsum volutpat gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentPage;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333', // Example color
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#666', // Example color
  },
  subHeading: {
    fontSize: '2rem',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#333', // Example color
  },
  agentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  agent: {
    width: '45%',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9', // Example background color
  },
  agentName: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333', // Example color
  },
  agentDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666', // Example color
  },
};
