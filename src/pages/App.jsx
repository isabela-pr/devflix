import { useEffect } from "react";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&s=Batman`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&S=${title}`);
    const data = await response.json();

    console.log(data);
  };

  const handleKeyPress = (e) => {
    e === "Enter" && searchMovies(searchTerm)
  }

  // fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Pesquise por filmes"
        />
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
    </div>
  );
};

export default App;
