import React, { useEffect } from "react";
import styled from "styled-components/macro";

const PageContent = styled.div `
  width: calc(100vw - 30px);
  height: 100%;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
`;



function Home(props) {


  useEffect(() => {
    if (props.isHome) {
      console.log('yes');
    }
  });

  return (
    <PageContent>
      <p>Homepage</p>
    </PageContent>

  );
}


export default Home;