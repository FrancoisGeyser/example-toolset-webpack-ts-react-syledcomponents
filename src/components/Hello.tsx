import * as React from 'react';
import styled from 'styled-components';

const Welcome = styled.h1`
  font-size: 10rem;
  color: red;
  font-weight: bold;
`;

const Hello = () => {
  return <Welcome>Hello!!</Welcome>;
};

export default Hello;
