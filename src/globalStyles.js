import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: #F8F8F8
    }
`;

export const Content = styled.div`
  max-width: 820px;
  display: block;
  margin: auto;
`;

Content.Line = styled.div`
  display: block;
  border-top: 1px solid #d0d0d0;
  margin: 15px 0;
`;
