import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: black;
`

export const Button = styled.button`
    margin-top: 1em;
    border-radius: 3px;
    background-color: white;
    color: white;
    border: none;
    &:hover {
        background-color: #555555;
        color: white;
    }
`
export const File = styled.div`
    margin-top: 1em;
    color: white;
`