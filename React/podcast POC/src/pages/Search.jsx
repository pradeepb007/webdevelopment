import { getPosts } from '../api/axios'
import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchPage/SearchBar'
import ListPage from '../components/SearchPage/ListPage';

import { Container } from "@mui/system";

export default function Search() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])  

  return (
    <div>
      <div className="main-container">
        <section className="section trending">
          <Container>
          <SearchBar posts={posts} setSearchResults={setSearchResults} />
           <ListPage searchResults={searchResults} />
          </Container>
        </section>
      </div>
    </div>
  );
}
