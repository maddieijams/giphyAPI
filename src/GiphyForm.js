import React, { Component } from 'react';
import GiphyFormResults from "./GiphyFormResults";
import styled from 'styled-components';

const SearchInput = styled.input`
  margin-top: 20px;
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  background-color: gold;
  `;

const Button = styled.button`
background-color: gold;
height: 30px;
`;

export class GiphyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.refs.name.value;

        const key = 'GEyrcX4wjmKjt5PerxzCJEeo6DFtEpmT';
        const BASEURL= 'http://api.giphy.com/v1/gifs/search';

        fetch(`${BASEURL}?q=${search}&api_key=${key}&limit=49`)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            let gifs = data.data;
            
            this.setState({ gifs });
            console.log(this.state.gifs)
    })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
            <SearchInput
            id="searchInput"
            ref="name"
            type="text"
            placeholder="search for a GIF!"
            required />
            {'\n'}
            <Button type="submit">Search</Button>
            <div id = "giflist">
                <GiphyFormResults gifs= {this.state.gifs} />
            </div>
            </form>
        )
    }

}