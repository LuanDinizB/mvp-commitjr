import Carousel from 'react-bootstrap/Carousel'
import Samuel from '../../../assets/Samuel.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './jcss.css';

function CarouselDefault() {

  return (
    <div>
      <Carousel>
        <Carousel.Item >        
          <iframe
            width="616"
            height="384"
            src={`https://www.youtube.com/embed/_fGbqxCIL60`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h5>asdasdsa</h5>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
         
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
       
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

      </Carousel>

    </div>
  )
};


export default CarouselDefault;
