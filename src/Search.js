import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const getBooks = async (book) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}`
    );
    const data = await response.json();
    return data;
  };

  const extractThumbnail = ({ imageLinks }) => {
    const DEFAULT_THUMBNAIL = "icons/logo.svg";
    if (!imageLinks || !imageLinks.thumbnail) {
      return DEFAULT_THUMBNAIL;
    }
    return imageLinks.thumbnail.replace("http://", "https://");
  };

  const drawBookList = (bookData) => {
    return bookData.items.map(({ volumeInfo }) => (
      <div className='book' key={volumeInfo.title}>
        <a href={volumeInfo.previewLink} target='_blank'>
          <img className='thumbnail' src={extractThumbnail(volumeInfo)} alt='cover' />
        </a>
        <div className='book-info'>
          <h3 className='book-title'>
            <a href={volumeInfo.previewLink} target='_blank'>
              {volumeInfo.title}
            </a>
          </h3>
          <div className='book-authors'>{volumeInfo.authors}</div>
          <div className='info'>{volumeInfo.categories || "Others"}</div>
        </div>
      </div>
    ));
  };

  const drawListBook = async () => {
    if (searchTerm !== "") {
      const data = await getBooks(`${searchTerm}&maxResults=6`);
      if (data.error) {
        setBooks([<div className='prompt'>ツ Limit exceeded! Try after some time</div>]);
      } else if (data.totalItems === 0) {
        setBooks([<div className='prompt'>ツ No results, try a different term!</div>]);
      } else {
        setBooks(drawBookList(data));
      }
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    drawListBook();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        id='search-box'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search books...'
      />
      <div className='search'>{books}</div>
    </div>
  );
};

export default Search;

