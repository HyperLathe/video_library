import React from 'react';
import styled from "styled-components";

const Main = styled.div `
  margin: 0px auto;
  padding: 20px 30px;
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



function App() {
  return (
    <Main>
    <YearHeader>
      <h3>2017 - Radical Ritual</h3>
    </YearHeader>
      <Videosection>
        <Videocontainer>
          <h3>Hunter's Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>Hunters' Lodge</h3>
          <p>It's a conspiracy...</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/6ryqc2zlhrn1z3x/IMG_1013.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>2017 - Hunters' Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>2017 - Hunters' Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>2017 - Hunters' Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>2017 - Hunters' Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>

        <Videocontainer>
          <h3>2017 - Hunters' Lodge</h3>
          <p>Enjoying the freaky eclipse shadows.</p>
          <Video controls>
          <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1" type="video/mp4" />
          </Video>
        </Videocontainer>
      </Videosection>
    </Main>
  );
}

export default App;
