import React, { useState } from 'react';
import './feedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!name || !email || !contactNo || !message) {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }

      await axios.post('http://localhost:5000/FeedbackSubmit', {
        name,
        email,
        contactNo,
        message,
      });
      
      setLoading(false);
      navigate('/');
    } catch (error) {
      setError('Failed to submit feedback. Please try again.');
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
    
    <div className="background">
     
      <div className="container">
      <div class="content" id='feedbackani'>
        <h1>Feedback</h1>
        <h1>Feedback</h1>
       </div>
        <div className="screen">
          <div className="screen-body">
            
            <div className="screen-body-item">
              <div className="app-title">
                <span className='text-center'>FEEDBACK</span>
              </div>
           
           
            <div className="screen-body-item">
              <div className="app-form">
                <form onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      name="name"
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="tel"
                      name="contactNo"
                      placeholder="CONTACT NO"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      name="message"
                      placeholder="MESSAGE"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div><br/>
                  <div className="app-form-group buttons">
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" disabled={loading}>
                      {loading ? 'Loading...' : 'Send'}
                    </button>
                  </div><br/><br/>
                  <div className="app-contact text-center">CONTACT INFO : +91 72288 06685</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      
    </>
  );
}
export default Feedback;