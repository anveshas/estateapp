import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>
          For any inquiries or assistance, please reach out to us using the contact information below.
          We are here to help you with all your real estate needs.
        </p>
        <h2 style={styles.subHeading}>Contact Information</h2>
        <ul style={styles.list}>
          <li>Email: info@estatewebsite.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address:</li>
          <li>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li>Street: 401, Distt Centre, Suneja Tower 1, Janak Puri</li>
              <li>City: Delhi</li>
              <li>State/province/area: Delhi</li>
              <li>Phone number: 01125508190</li>
              <li>Zip code: 110058</li>
              <li>Country calling code: +91</li>
              <li>Country: India</li>
            </ul>
          </li>
        </ul>
      </div>
      <div style={styles.mapContainer}>
        <h2 style={styles.subHeading}>Location</h2>
        <iframe
          title="Estate Website Location"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9139344860084!2d77.2244508150874!3d28.632478692397755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b349d6271%3A0x50e1a20d1b79f10!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1623705900000!5m2!1sen!2sus"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#333', // Example color
  },
  content: {
    flex: '0 0 60%', // 60% width for content
  },
  heading: {
    fontSize: '2.5rem',
    margin: '20px 0',
    textAlign: 'center',
    color: '#333', // Example color
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#666', // Example color
  },
  subHeading: {
    fontSize: '2rem',
    margin: '30px 0 10px',
    color: '#333', // Example color
  },
  list: {
    listStyleType: 'none',
    fontSize: '1.1rem',
    marginBottom: '20px',
    paddingLeft: '20px',
    color: '#666', // Example color
  },
  mapContainer: {
    flex: '0 0 40%', // 40% width for map container
    marginLeft: '20px', // Space between content and map
    height: '450px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
  },
};

export default ContactPage;
