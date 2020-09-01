import React from "react";
import styled from "styled-components/macro";

const PageContent = styled.div `
  height: 100%;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
`;

const Videosection = styled.section `
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
 grid-auto-rows: calc(100vw * 0.5);
 grid-gap: 2rem;
 margin-top: 40px;
   @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    grid-auto-rows: calc(50vw * 0.5);
   }
   @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-auto-rows: calc(30vw * 0.6);
   }
`;

const YearHeader = styled.div `
  width: 100%;

`;


const Videocontainer = styled.div `
  padding: 10px 10px;
  border: 1px solid #b2b2b2;
`;



function VideoPage(props) {

  const vidCollection = [...Array(props.vidcount)].map((_, i) => {
    return (

      <Videocontainer>
           <iframe width='100%' height='100%'
           src={'https://www.youtube-nocookie.com/embed/' + (props.vids[i])}
           frameborder='0'
           allow='autoplay; encrypted-media'
           title={(props.vids[i].title)} allowfullscreen="true" >
           </iframe>
      </Videocontainer>
    
    );
  });

  return (
    <PageContent>
      <YearHeader>
      <h2>Videos from {props.id}</h2>
      <p>Theme: {props.theme}</p>
      <p>Project: {props.project}</p>
      <p>{props.summary}</p>
      </YearHeader>

      <Videosection>
        {vidCollection}
      </Videosection>

      
    </PageContent>

  );
}


export default VideoPage;