import styled from "styled-components";

const Contact = () => {
  
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: rgb(126 12 146);
            color: rgb(255 255 255);

            &:hover {
              background-color: rgb(126 12 146);
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: rgb(255 255 255);
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

   return <Wrapper>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.341606923283!2d74.25755577433222!3d17.00690591365617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10bb37ee1d63d%3A0xef971898b091fb1!2sSaii%20Traders!5e0!3m2!1sen!2sin!4v1681831548886!5m2!1sen!2sin"
      title="Saii Traders Kameri"
      width="100%"
      height="300px" 
      style={{ border:0 }}
      allowfullscreen=""
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpzeognb" method="POST" className="contact-inputs">
        <input type="text" placeholder="enter User Name" name="username" required autocomplete="off"/>
        <input type="email" placeholder="enter Email" name="email" required autocomplete="off"/>
        <textarea name="msg" id="" placeholder="Enter your message here" cols="30" rows="10" required autocomplete="off"/>
        <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
   </Wrapper>;
};

export default Contact;
