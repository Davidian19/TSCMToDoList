import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: initial;
    @media screen  and (max-width: 761px){
        width: 330px;
        margin-left: 20px;
    }
`;
export const Logo = styled.img`
    width: 179px;
    @media screen  and (max-width: 761px){
        width: 133px;
    }
`;