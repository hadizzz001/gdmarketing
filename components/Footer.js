"use client";

const Section = () => {
  return (
    <div
      className="section-container"
      style={{
        backgroundColor: '#044877',
        color: '#fff',
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Contact Us Section */}
      <section
        className="contact-us"
        style={{
          opacity: 0,
          animation: 'fadeIn 1s ease-in-out forwards',
          backgroundColor: 'transparent',
          color: '#fff',
          textAlign: 'center',
          maxWidth: '800px',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div
            className="phone-number"
            style={{
              opacity: 0,
              animation: 'fadeIn 1.2s ease-out forwards 0.5s',
              marginBottom: '10px',
            }}
          >
            <p>📞 North America: +647 874 0577</p>
          </div>
          <div
            className="phone-number"
            style={{
              opacity: 0,
              animation: 'fadeIn 1.2s ease-out forwards 0.7s',
            }}
          >
            <p>📞 Middle East: +961 81 001300</p>
          </div>
          <div
            className="email"
            style={{
              opacity: 0,
              animation: 'fadeIn 1.2s ease-out forwards 0.9s',
              marginTop: '10px',
            }}
          >
            <p>
              📧 Email:{' '}
              <a
                href="mailto:gabdallah@gdmarketing.net"
                style={{ color: '#fff', textDecoration: 'underline' }}
              >
                gabdallah@gdmarketing.net
              </a>
            </p>
          </div>
          <div
            className="website"
            style={{
              opacity: 0,
              animation: 'fadeIn 1.2s ease-out forwards 1.1s',
              marginTop: '10px',
            }}
          >
            <p>
              🌐 Website:{' '}
              <a
                href="https://www.gdmarketing.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline' }}
              >
                www.gdmarketing.net
              </a>
            </p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} GD Marketing Group</p>
      </section>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Section;
