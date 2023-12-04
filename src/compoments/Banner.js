import React from 'react';

const Banner = () => {
  const backgroundImageUrl = 'url("https://filmrecensiesselflabvideo.files.wordpress.com/2021/08/62626841-0-q80.jpg")';

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '70vh',
    width: '100vw',
    position: 'relative',
  };

  const imageContentStyle = {
    marginTop: '10px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    padding: '20px', 
  };

  const titleStyle = {
    fontSize: '3em', 
    color: 'white',
    marginBottom: '40px', 
    fontWeight: 'bold', 
    marginTop: '-100px',
  };

  const buttonsStyle = {
    display: 'flex',
    marginBottom: '20px', 
  };

  const buttonCommonStyle = {
    marginRight: '10px', 
    padding: '10px', 
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px', 
  };

  const descriptionStyle = {
    color: 'white',
    fontWeight: 'bold', 
    maxWidth: '800px', 
    fontSize: '20px'
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner__contents" style={imageContentStyle}>
        <h1 className="banner__title" style={titleStyle}>
          Ginny &amp; Georgia
        </h1>
        <div className="banner__buttons" style={buttonsStyle}>
          <button className="banner__button" style={buttonCommonStyle}>
            Play
          </button>
          <button className="banner__button" style={buttonCommonStyle}>
            My List
          </button>
        </div>
        <h1 className="banner__description" style={descriptionStyle}>
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
