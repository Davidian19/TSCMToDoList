import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background-color: #474747;
    width: 660px;
    border-radius: 15px;
    align-items: center;

    @media screen and (max-width: 761px){
        width: 330px;
        flex-direction: column;
    }
`;

export const LeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    @media screen and (max-width: 761px){
        text-align: left;
    }
`;
export const LeftTitle = styled.h4`
    font-size: 16px;
    font-weight: 600;
    margin-top: -8px;
    margin-left: -0;
    @media screen and (max-width: 761px){
        text-align: left;
        margin-top: 16px;
    }
`;
export const LeftDescription = styled.span`
    font-weight: 300;
    font-size: 13px;
    opacity: 80%;
    margin-top: -20px;
    @media screen and (max-width: 761px){
        flex-direction: column;
        text-align: left;
    }
`;


export const RightInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    opacity: 80%;
    span{
        font-weight: 300;
        font-size: 13px;
        opacity: 80%;
        width: 200px;
        margin-right: 10%;
        padding-top: 35px;
        padding-bottom: 16px;
        @media screen and (max-width: 761px){
            margin-right: 90px;
            margin-left: -100px;
            padding: 25px 0px 16px 0;
            margin-right: 31%;
        }
    }
    button{
        margin-top: 0%;
        margin-left: 0;
        @media screen and (max-width: 761px){
            margin-top: -50px;
            margin-left: 310px;
        }
    }
`;
export const CloseButton = styled.button`
    font-size: 14px;
    color: #474747;
    
    background-color: #FFA5A5;
    border: none;
    padding: 5px 8px;
    border-radius: 15px;
    cursor: pointer;
    width: 30px;
`;