import React, { Component } from 'react';

import 'typeface-roboto';
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios'

import Form from './components/Form'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Footer from './components/Footer'

const API_KEY = 'mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx'

class App extends Component {
  state = {
    keyword: '',
    articles: [],
    status: true
  }

  // ${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=vancouver

  getFood = async(event) => {
    event.preventDefault()
    console.log(this.state)

    const query = event.target.elements.keyword.value


    // const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=3`
    const url = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?locale=en_CA&location=vancouver&term=${query}&categories=Bakeries&limit=10&open_now=true`

    console.log(url)

    axios.get(url, 
      {
        Authorization: "Bearer " + API_KEY
      }
      ).then((response)=>{
        console.log("response: >> "+response)
      }).then((error)=>{
        console.log("error: >> "+error)
      })

    const api_call = await fetch(url)

    const data = await api_call.json()

    console.log('data', data)
    console.log('status:', data.status)
    console.log('articles:', data.articles)
    
    if (data.status == 'ok'){
      this.setState({
        articles: data.articles,
        keyword: query,
        status: true
      })
    } else {
      this.setState({
        status: false,
        error: `Error, Please input some keyword.`
      })
    }
  }
  render() {
    return (
      <CssBaseline>
        <div className='wrapper'>
          <div className='title'>
            <h1>Seach Food App</h1>
          </div>
          <Form 
            getFood = {this.getFood}
          />
          <div className='food_section'>
            {!this.state.status && <p style={{textAlign: 'center'}}>{this.state.error}</p>}
            {this.state.status && this.state.articles.map((article) => {
              return (
                <Article
                // source={article.source.name}
                // author={article.author}
                // title={article.title}
                // description={article.description}
                // url={article.url}
                // urlToImage={article.urlToImage}
                // publishedAt={article.publishedAt}
                // content={article.content}
              />
            )})}
          </div>
          <Footer />
        </div> 
      </CssBaseline>
    );
  }
}

export default App;
