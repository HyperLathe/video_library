import React from "react";
import styled from "styled-components/macro";

const PageContent = styled.div `
  width: calc(100vw - 30px);
  height: 100%;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
`;

const Videosection = styled.section `
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
 grid-gap: 2rem;
`;

const YearHeader = styled.div `
  width: 100%;

`;


const Videocontainer = styled.div `
  padding: 10px 20px;
  border: 1px solid #b2b2b2;
  place-self: center;
`;


const Video = styled.video `
  width: 300px;
`;



function VideoPage(props) {

  const vidCollection = [...Array(props.vidcount)].map((_, i) => {
    return (

      <Videocontainer>
           <h4>{props.vids[i].title}</h4>
           <Video controls>
           <source src={(props.vids[i].url) + "?raw=1#t=0.01"} type="video/mp4" preload="metadata" key={i} />
           </Video>
      </Videocontainer>
    
    );
  });

  return (
    <PageContent>
      <h2>Videos from {props.id}</h2>
      <p>Theme: {props.theme}</p>
      <p>Project: {props.project}</p>
      <p>{props.summary}</p>

      <Videosection>
        {vidCollection}
      </Videosection>

      
    </PageContent>

  );
}


export default VideoPage;