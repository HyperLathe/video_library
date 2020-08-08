import React, { useState } from "react";
import styled from "styled-components";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import PageContent from "./content.json";

import Home from "./Home";
import VideoPage from "./VideoPage";
import NavBurger from "./components/NavBurger";

const Main = styled.div `
  margin: 0px auto;
  padding: 20px 30px;
`;

const Header = styled.header `
  width: 100%;
  background: #eeeeee;
`;

const Nav = styled.nav`
	list-style-type: none;


	margin: 0px;
	padding: 20px;
	width: 200px;
	display: flex;
	 a {
			font-family: helvetica, arial, sans-serif;
			text-transform: uppercase;
			font-size: 0.8rem;
			text-decoration: none;
			color: #b4b4b4;
			margin-bottom: 7px;
				&:hover,
				&.active {
					color: #000;
				}
	 }
`;

const Content = styled.div`
	width: 100%;
	padding: 70px 0px 10px 0px;
	height: 100%;
	@media screen and (min-width: 768px) {
		height: 100%;
		padding: 30px 0px 10px 0px;
	}
`;

const Footer = styled.footer`
	margin: 10px 0;
	text-align: center;
		span {
			font-size: 0.7rem;
			color: #c6c6c6;
		}
		@media screen and (min-width: 768px) {
			margin: 30px 0px 10px 0px;
			text-align: left;
		}

`;


function App() {

    const [isHome, setHome] = useState(false);
  
    const displayYear = new Date().getFullYear();
  
    return (
      <BrowserRouter>
        <Main>
          <Header>
            <h1>Iron Monkey Arts at Burning Man</h1>
            <Nav>
              <NavLink exact to="/">Home</NavLink>

                {Object.entries(PageContent).map(([key, value]) => {
                  return (<NavLink key={key} to={"/videos/" + value.id}>{value.nav}</NavLink>)
                })}
            </Nav>
          </Header>
          <Content>
            <Route exact path="/" isHome={isHome} setHome={setHome} component={Home} />
  
            {Object.entries(PageContent).map(([key, value]) => {
              return (<Route exact path={"/videos/" + value.id} key={key} render={() => <VideoPage {...value} />} />)
            })}
  
            <Footer>
              <span>© {displayYear} Richard Young. All rights reserved.</span>
            </Footer>
  
          </Content>
        </Main>
      </BrowserRouter>


    // <Main>
    // <YearHeader>
    //   <h3>2017 - Radical Ritual</h3>
    // </YearHeader>
    //   <Videosection>
    //     <Videocontainer>
    //       <h4>Contacts</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/4gzzenq7tlv2ca8/IMG_1008.MOV?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>It's a conspiracy...</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/6ryqc2zlhrn1z3x/IMG_1013.MOV?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>A failed experiment</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/9zprljflx2slu32/IMG_1036.MOV?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Good to know</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/kc3trlfi7xxbiw1/IMG_1037.MOV?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Where's my Wait What?</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/nptxd6hn0638rwe/IMG_1039.MOV?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Lollygag</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/ii8smd2032ij032/IMGA0023.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>6 inches</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/6guj2mnyo2gchqy/IMGA0030.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>It's a celebration, Burners</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/fpmx0tv5b2knvg1/IMGA0033.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Always listen to Gary</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/ka8laa41d539fi4/IMGA0034.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>So cool</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/sfqplcqufc47bn5/IMGA0035.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Nice save</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/sbjcfr4wahgw1zz/IMGA0036.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>The Doctor misses</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/matgkasco1hapmb/IMGA0043.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Banana dash</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/sxyx336xnipamyy/IMGA0052.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Static</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/ejoybqb47tb3x7x/IMGA0058.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>

    //     <Videocontainer>
    //       <h4>Always listen to Gary</h4>
    //       <Video controls>
    //       <source src="https://www.dropbox.com/s/ka8laa41d539fi4/IMGA0034.MP4?raw=1#t=0.01" type="video/mp4" preload="metadata" />
    //       </Video>
    //     </Videocontainer>


    //   </Videosection>
    // </Main>
  );
}

export default App;
