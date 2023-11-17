import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    .toDoList{
        background-color: #3D3D3D;
        border-radius: 15px;
        width: 700px;
        overflow-y: auto;
        height: 640px;
        padding-left: 30px;
        @media screen and (max-width: 761px){
            padding: 0 8px 0 16px;
        }
    }
    .ContainerList{
        ul{
            padding-inline-start: 0;
            margin-block-end: 0;
        }
        li{
            list-style: none;
            margin-top: 16px;
        }
    }
    .RightSection{
        margin-left: 30px;
        width: 340px;
    }

    @media screen and (max-width: 761px){
        flex-direction: column;
        align-items: center;
        .toDoList{
            width: 340px;
            margin-bottom: 30px;
        }
        .RightSection{
            margin-left: -30px;
            width: 340px;

        }
    }
`;