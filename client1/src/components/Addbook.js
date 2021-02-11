import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getAuthorsQuery} from "../queries/queries";


class Addbook extends Component {
    displayAuthors(){
        var data= this.props.data;
        if(data.loading){
            return (<option disabled>loading authors</option>)
        }else{
            return data.authors.map(author => {
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    render(){
      return (
        <form id="add-book">

            <div className="field">
                <label>Book Name:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {this.displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
      );
    }
  }

  export default graphql(getAuthorsQuery)(Addbook);