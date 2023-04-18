import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (    
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h2>Oh! You are lost.</h2>
          <p>
            The page you are looking for is not exists. Click to below button to go back to the homepage.          
          </p>
          <NavLink to="/" className="navbar-link">
            <Button>Go Back to home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .container {
    padding: 9rem 0;
    text-align: center;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
  }

  p
  {
    margin: 2rem 0;
  }

`;

export default Error;