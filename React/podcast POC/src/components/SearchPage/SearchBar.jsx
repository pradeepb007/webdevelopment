const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

  
    const resultsArray = posts.filter(
      (post) =>
        post.Name.toLowerCase().includes(e.target.value) ||
        post.Name.includes(e.target.value) ||
        post.Description.toLowerCase().includes(e.target.value) ||
        post.Description.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        {/* <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button> */}
      </form>
      <br />
      <br />
    </>
  );
};
export default SearchBar;
