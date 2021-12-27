import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    memeName: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const memesFromServer = await fetchData();
      setAllMemes(memesFromServer);
    };
    getMemes();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    return data.data.memes;
  };

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const memeDesc = allMemes[randomNumber].name;
    setMeme((previousMeme) => ({
      ...previousMeme,
      randomImage: url,
      memeName: memeDesc,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeValue) => {
      return {
        ...prevMemeValue,
        [name]: value,
      };
    });
  }

  const downloadImage = () => {
    saveAs(`${meme.randomImage}`, "meme.jpg");
  };

  return (
    <div className="container">
      <div className="form">
        <input
          name="topText"
          type="text"
          className="right"
          placeholder="Type Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          type="text"
          className="left"
          placeholder="Type Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button onClick={getMemeImage} className="form__btn">
        Get a new meme image 😉
      </button>
      <div className="meme">
        <div className="meme--content-left">
          <img
            src={meme.randomImage}
            alt="randomImage"
            className="meme--image"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        <div className="meme--content-right">
          <h1 className="description--header">Description</h1>
          {!meme.memeName.length ? (
            <p className="description--paragraph">Sample Image</p>
          ) : (
            <p className="description--paragraph">{meme.memeName}</p>
          )}
          <button onClick={downloadImage} className="download--btn">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
