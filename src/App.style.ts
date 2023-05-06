import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #17181F;
    color: #797A81;
`;

export const Header = styled.header`
    max-width: 980px;
    margin: auto;
    padding: 10px;
    padding-bottom: 15px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #FFF;
    text-align: center;
    border-bottom: 2px solid #444;
`;

export const Main = styled.main`
    max-width: 980px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListArea = styled.section`
    width: 100%;
`;
