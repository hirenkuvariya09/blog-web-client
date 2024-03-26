import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>This is the footer</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',

    left: '0',
    bottom: '0',
    width: '100%'
  }
};

export default Footer;
