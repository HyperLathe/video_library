import React, { useState } from "react";
import styled from "styled-components";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import PageContent from "./content.json";

import Home from "./Home";
import VideoPage from "./VideoPage";

const Main = styled.div `
  margin: 0px auto;
  padding: 20px 30px;
`;

const Header = styled.header `
  background: #eeeeee;
  padding: 10px 20px;
`;

const Nav = styled.nav`
	list-style-type: none;
	margin: 0px;
	padding: 0px;
	width: 200px;
	display: flex;
	 a {
			font-family: helvetica, arial, sans-serif;
			text-transform: uppercase;
			font-size: 0.8rem;
			text-decoration: none;
			color: #b4b4b4;
      margin-bottom: 7px;
      margin-right: 15px;
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
              <span>© {displayYear} Iron Monkey Arts. All rights reserved.</span>
            </Footer>
  
          </Content>
        </Main>
      </BrowserRouter>
  );
}

export default App;
