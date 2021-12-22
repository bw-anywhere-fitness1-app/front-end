import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import HomePage from "./components/homepage/HomePage";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
}
`;

function App() {
  return (
		<HomePage />

	);

}

export default App;