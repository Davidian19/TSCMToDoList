import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    background-color: #3D3D3D; 
    border-radius: 15px;
    padding: 16px;
    h4{
        text-align: center;
    }
    .form{
        align-items: center;
        display: flex;
        flex-direction: column;
        label{
            text-align: left;
            width: 291px;
            margin-top: 16px;

        }

        input{
            width: 290px;
            height: 42px;
            border-radius: 10px;
            background-color: #474747;
            border: none;
            padding-left: 8px;
            margin-top: 8px;
            color: white;
        }

        button{
            width: 295px;
            margin: 20px 0;
            height: 45px;
            border-radius: 5px;
            border: none;
            color: #333333;
            background-color: white;
        }
    }
`;