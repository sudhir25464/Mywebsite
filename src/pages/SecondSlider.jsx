import Carousel from 'react-bootstrap/Carousel';


function SecondSlider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098670/SudhirMediaLabrary/Screenshot_91_e2eko3.png' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098670/SudhirMediaLabrary/Screenshot_89_hznslw.png' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098694/SudhirMediaLabrary/Screenshot_85_wilz9h.png' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098695/SudhirMediaLabrary/Screenshot_86_audofj.png' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098696/SudhirMediaLabrary/Screenshot_88_f7xiko.png' ></img>
      </Carousel.Item>

      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098697/SudhirMediaLabrary/Screenshot_89_qtzjgt.png' ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default SecondSlider;