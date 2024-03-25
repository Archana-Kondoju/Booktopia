import styled from "styled-components";

export const BookMainContainer=styled.div`
    height:100%;
    min-height:100vh;
    margin-top:0px;
    padding:0px;
    display:flex;
    justify-contenet:center;
    flex-direction:column;
`;

export const BookContainer=styled.div`
    min-height:100vh;
    margin-left:20vw;
    margin-top:150px;
    @media (max-width:768px){
        width:100%;
        margin-left:0px;
    };
`;

export const BooksContainer=styled.div`
    display:flex;
    align-items:center;
    margin-top:50px;
    color:black;
    margin-left:30px;
    margin-right:20px;
    margin-bottom:50px;
    justify-content:space-around;
    flex-wrap:wrap;
`;
export const ImagesContainer=styled.div`
    width:240px;
    height:400px;
    background-color:;
    border-radius:4px;
    padding-top:10px;
    padding-left:12px;
    padding-right:12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:16px;
    position:relative;
    border:1px solid gray;
    &:hover{
        cursor:pointer;
    }
`;

export const StyledImage=styled.img`
    width:250px;
    height:320px;
    border-radius:4px;
`;
export const DownloadButton=styled.button`
    background-color:#2D9596;
    color:white;
    border:none;
    border-radius:5px;
    font-size:18px;
    padding:10px;
    padding-left:40px;
    padding-right:40px;
    margin-right:50px;
    margin-left:50px;
    &:hover{
        cursor:pointer;
        background-color:#265073;
    }
`;
export const ReadButton=styled.button`
    background-color:#265073;
    color:white;
    border:none;
    border-radius:5px;
    font-size:18px;
    padding:10px;
    padding-left:30px;
    padding-right:30px;
    margin-right:50px;
    margin-left:50px;
    margin-top:20px;
    text-align:center;
    &:hover{
        cursor:pointer;
        background-color:#2D9596;
    }
`;

export const Heading1=styled.h1`
    marginTop:10px;
    color:#F7673D;
`;

export const Heading2=styled.h2`
    textAlign:center;
    fontFamily:cursive;
`;