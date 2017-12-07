import React from 'react';
import {InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch/dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
// import SearchList from './SearchList.jsx'

function foundItem({hit}) {
  console.log('HITHITHIT',hit)
  return(
    <div>
      Item: {hit.name}
    </div>
  )
}

//think of this as Search Result List component. it's like Search Result List Entry, maps and formats each found entry
 function Search() {
  return (
    <div>
    <Hits hitComponent={foundItem} />
    </div>
  )
}

function passSearch () {
  return (<Search />)
}

export class SearchHits extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSearch.bind(this);
  }
  this.handleSearch.bind(this);

  passSearch() {
    return (<Search/>)
  }

  handleSearch(
    this.props.passSearch()
  )


  render() {
    // call props func and pass in <search>
    this.handleSearch();
    return (
      <InstantSearch
      appId="9VH3I9OJWS"
      apiKey="289636a507e4853ef95cc5b7e4cac8d9"
      indexName="item"
      >
        <SearchBox translations={{placeholder:'Search something'}} />

      </InstantSearch>
    )
  }
}
