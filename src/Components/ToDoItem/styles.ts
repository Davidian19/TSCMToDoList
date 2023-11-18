import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    position: relative;
    background-color: #474747;
    width: 660px;
    border-radius: 15px;
    align-items: center;
    height: 90px;
    @media screen and (max-width: 761px){
        width: 300px;
        height: 90px;
        flex-direction: column;
        margin-left: 10px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    text-align: left;
    @media screen and (max-width: 761px){
        text-align: left;
        margin-left: -60px;
    }
`;
export const TitleTask = styled.h4`
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 0px;
    @media screen and (max-width: 761px){
        text-align: left;
        margin-top: 16px;
        margin-bottom: 20px;
    }
`;
export const Description = styled.span`
    font-weight: 300;
    font-size: 16px;
    opacity: 80%;
    @media screen and (max-width: 761px){
        max-width: 150px;
        flex-direction: column;
        text-align: left;
        font-size: 12px;
        white-space: nowrap;         
        overflow: hidden;           
        text-overflow: ellipsis;    
        max-width: 200px;
    }
`;
export const InfoTask = styled.span`
    display: inline;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 761px){
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: -21px;
    }
    .date{
        position: absolute;
        z-index: 0;
        left: 65%;
        top: auto;
        bottom: auto;
        font-weight: 300;
        font-size: 13px;
        opacity: 80%;
        width: 200px;
        padding-bottom: 16px;
        @media screen and (max-width: 761px){
            position: static;
            left: 0;
            margin-left: 0px;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    margin-top: -80px;
    opacity: 80%;
    button{
        @media screen and (max-width: 761px){
            margin-top: -150px;
            margin-left: 290px;
        }
    }
`;

export const CloseButton = styled.button`
    font-size: 14px;
    color: #474747;
    background-color: #FFA5A5;
    border: none;
    padding: 7px;
    border-radius: 15px;
    cursor: pointer;
    width: 30px;
`;