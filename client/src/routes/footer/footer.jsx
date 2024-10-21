import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          <img src="/logo.png" alt="RealEstate Logo" style={styles.logoImg} />
          <span style={styles.logoText}>RealEstate</span>
        </div>
        <div style={styles.links}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
        <div style={styles.social}>
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div style={styles.copyRight}>
        &copy; 2024 RealEstate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '50px',
    textAlign: 'center',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    width: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  social: {
    display: 'flex',
    gap: '10px',
    fontSize: '1.5rem',
    marginTop: '10px',
  },
  copyRight: {
    marginTop: '10px',
    fontSize: '0.9rem',
  },
};
