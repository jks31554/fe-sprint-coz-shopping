import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ImageContainer,
  ImgBox,
  MainContainer,
  MainImg,
  Pbox,
  ProductTitle,
} from '../styled/style';

function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://cozshopping.codestates-seb.link/api/v1/products?count=8'
      );
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const shuffleImages = () => {
    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }
    return shuffledImages;
  };

  return (
    <MainContainer>
      {images.length > 0 && (
        <div>
          <ProductTitle>상품리스트</ProductTitle>
          <ImgBox>
            {shuffleImages()
              .slice(0, 4)
              .map((image) => (
                <ImageContainer key={image.id}>
                  <MainImg
                    src={image.image_url || image.brand_image_url}
                    alt={image.title || image.brand_name}
                  />
                  <Pbox>
                    {image.title && (
                      <p
                        style={{ fontFamily: 'Intel', margin: '10px 0 5px 0' }}
                      >
                        {image.title}
                      </p>
                    )}

                    {image.sub_title && (
                      <p
                        style={{ fontFamily: 'Intel', margin: '10px 0 5px 0' }}
                      >
                        {image.sub_title}
                      </p>
                    )}
                    {image.price && (
                      <p
                        style={{ fontFamily: 'Intel', margin: '10px 0 5px 0' }}
                      >
                        {image.price}
                      </p>
                    )}
                  </Pbox>
                </ImageContainer>
              ))}
          </ImgBox>
        </div>
      )}
    </MainContainer>
  );
}

export default Main;
