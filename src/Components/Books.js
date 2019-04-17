import React,  { Component } from 'react';
import SearchArea from './SearchArea'
import request from 'superagent';
import Booklist from './Booklist';


class Books extends Component {
	

	constructor(props){
		super(props);
		this.state= {
				books: [],
				items: [],
				localbooks: [],
				searchField:'' ,
				localFound: false,
		}
	}
	
	componentDidMount(){
		
			
			
	}
	
	searchBook = (e) =>{
		e.preventDefault();
		/*{items.map((item,i)=> {
			
			
				
				if(this.state.searchField == item.ISBN)
				{
					localFound= true;
				}
				else
				{
					localFound=false;
				}
				
			})
		}
		
		if(localFound== true){
			
			
		}
		else{
		*/
		fetch('http://localhost:8080/rest/books/all')
			.then(res => res.json())
			.then(json=>{
				
				console.log(json);
				this.setState({
					localbooks: json,
					
				})		
			});
		
		request
			   .get("https://www.googleapis.com/books/v1/volumes")
			   .query({ q: this.state.searchField})
			   .then((data) => {
				   console.log(data)
				   this.setState({ books: [...data.body.items]})
			})
					
		//}
		
	}
	
	
	handleSearch =(e)=>{
		
		e.preventDefault();
		var isValidISBN = e.target.value.match(/[9]+[0-9]{12}/g);
		if(isValidISBN) {
			e.target.classList.remove("error");
			e.target.nextElementSibling.nextElementSibling.classList.add("hide");
			this.setState({ searchField: e.target.value });
		} else {
			e.target.classList.add("error");
			e.target.nextElementSibling.nextElementSibling.classList.remove("hide");
		}
		
	}
	handleSubmit =(e)=>{		
			e.preventDefault();
			window.location.reload();
		}
    render() {
		
		
		
		return (
		<div>
			
			<SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
			
			
			<Booklist books={this.state.books} /> 
			<br/>				
			<button type="submit" onClick={this.handleSubmit}> Submit and Search Again </button> 
		</div>
    );
  }
}

export default Books;
