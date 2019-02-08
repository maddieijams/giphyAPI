import React from 'react';
import styled from 'styled-components';

const GIFList = styled.ul`
background: gold;
list-style-type: none;
width: 95vw;
margin: auto;

`;

const GIF = styled.li`
padding: 10px;
margin: 0px;
background: gold;
float: left;
list-style-type: none;
`;

const Img = styled.img`
    width: 225px;
    height: 225px;
`;

const All = styled.div`
background: black;
`


const GiphyFormResults = ({ gifs }) => {
    const resultsFormatted = gifs.map((element, index) =>
    <GIF key ={index}>
    <a href={gifs[index].bitly_gif_url} target="blank"><Img src = {gifs[index].images.original.url}></Img></a>
    </GIF>
    )

    return(
        <All>
        <GIFList id = "giflist">
        {resultsFormatted}
        </GIFList>
        </All>
    )
}

export default GiphyFormResults;