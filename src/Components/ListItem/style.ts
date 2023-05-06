import styled from "styled-components";
type Props = {
    checked: boolean
}

export const Container = styled.div`
    max-width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

`;

export const SectionOne = styled.section(({checked}: Props) => (
`   display: flex;
    align-items: center;
    
    input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    label {
        color: #CCC;
        font-size: 18px;
        text-decoration: ${checked ? 'line-through' : 'initial'};
    }
`));

export const SectionTwo = styled.section`
    .button {
        width: 80px;
        height: 20px;
        padding: 0 0 4px 12px;
        color: #CCC;
        border-radius: 5px;
        background-color: #C10;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
            opacity: 80%;
        }
    }

`;