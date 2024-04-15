import Carousel from 'react-bootstrap/Carousel';


function ProjectSlider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711721632/Screenshot_69_zs8vc7.png'></img>

        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>

          <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098667/SudhirMediaLabrary/Screenshot_92_frvvlt.png'></img>

        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>

          <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098665/SudhirMediaLabrary/Screenshot_84_iumost.png' ></img>

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>

          <p className='text-dark'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* https://res.cloudinary.com/dmcytmsit/image/upload/v1713098665/SudhirMediaLabrary/Screenshot_80_rtz6lz.png */}
    
      <Carousel.Item>
        <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098665/SudhirMediaLabrary/Screenshot_82_eqzxir.png' ></img>
     
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098665/SudhirMediaLabrary/Screenshot_81_nakwqr.png' ></img>
     
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098668/SudhirMediaLabrary/Screenshot_90_dlminc.png' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1713098669/SudhirMediaLabrary/Screenshot_83_lb0x9l.png' ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectSlider;