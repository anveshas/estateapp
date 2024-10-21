import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Our Estate Website</h1>
      <p style={styles.paragraph}>
        Welcome to our estate website, your premier destination for finding the perfect property.
        We pride ourselves on providing a seamless experience for buyers, sellers, and renters alike.
        Our commitment to excellence and customer satisfaction sets us apart in the real estate industry.
      </p>
      <h2 style={styles.subHeading}>Brilliance</h2>
      <p style={styles.paragraph}>
        Our website offers a user-friendly interface with advanced search capabilities and chat functionalities,
          ensuring you find properties that match your exact requirements with all sorts of negotiations involved.
          We strive to showcase the brilliance of every property, from cozy apartments to luxurious estates.
        </p>
      <h2 style={styles.subHeading}>Credibility</h2>
      <p style={styles.paragraph}>
        With years of experience, we have built a reputation for trustworthiness and reliability.
        Our team of dedicated agents is here to guide you through every step of the real estate journey,
        ensuring transparency and integrity in all transactions.
      </p>
      <h2 style={styles.subHeading}>Our Staff</h2>
      <p style={styles.paragraph}>
        Meet our team of expert agents who are committed to helping you find your dream home.
        Their knowledge of the local market and dedication to client satisfaction are second to none.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: '#343a40',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '2rem',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#007bff',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#6c757d',
  },
};

export default AboutPage;
