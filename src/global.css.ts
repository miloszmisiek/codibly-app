import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
}

body {
  margin: 0;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  letter-spacing: 1px;
  background-color: #e9ecef;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (max-width: 576px) {
  #root {
    padding: 2rem 1rem;
  }
}
`;
