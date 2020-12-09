import React, {Component} from "react";
import SearchBar from "./api/SearchBar";
import unsplash from "./api/unsplash";
import {ImageList} from "./api/ImageList";


export class Api extends Component {
    state = { images: []};

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {query: term},
        });
        this.setState({images:response.data.results })
    }

     render() {
         const { images } = this.state;
         return(
             <div className="ui container">
                 <SearchBar onSubmit={this.onSearchSubmit} />
                 <ImageList images={images} />
             </div>
         );
     }
}
