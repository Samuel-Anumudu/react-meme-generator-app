import React from "react";
import memesData from "../memesData";

const Meme = () => {
  // Get Random URL from memesData
  const getMemeImage = () => {
    const imageUrls = [];
    for (let item of memesData.data.memes) {
      imageUrls.push(item.url);
    }
    let randomURL = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    console.log(randomURL);
  };

  return (
    <div>
      <div className="container">
        <div className="form">
          <input type="text" className="right" placeholder="Top Text"></input>
          <input type="text" className="left" placeholder="Bottom Text"></input>
        </div>
        <button onClick={getMemeImage} className="form__btn">
          Get a new meme image
        </button>
      </div>
    </div>
  );
};

export default Meme;
