import React from 'react';
import styled from '@emotion/styled';

const Footer = (props) => {
    
    
const Footer = styled.div`
  display: flex;
  min-height: 20vh;
  flex-direction: column;
`;
    return (
      <Footer>
       {props.children}
      </Footer>
    );
}

export default Footer;
