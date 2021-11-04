import Carousel from 'react-bootstrap/Carousel'
import Samuel from '../../../assets/Samuel.jpg';
import TextareaAutosize from '@mui/core/TextareaAutosize';

import 'bootstrap/dist/css/bootstrap.min.css';
import './jcss.css';

function CarouselDefault() {

  return (
    <div>
      <Carousel>
        <Carousel.Item >
          <div class="video">
            <iframe
              width="650"
              height="384"
              src={`https://www.youtube.com/embed/_fGbqxCIL60`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="data">
            < div className="movie-title" >
              {"Nome do Filme"}
            </div>

            <div className="overview">
              <TextareaAutosize
                maxRows={4}
                defaultValue="Sinopse: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua."  
                 style={{width:500, height:150}}              
              />
            </div>
            <div className="original-title">
             <strong>Titulo Original:</strong> {"Titulo Original"}
            </div>
            <div className="genres">
             <strong>Gêneros:</strong> {"Gêneros"}
            </div>
            <div className="date">
             <strong>Data de estreia:</strong> {"00:00:0000"}
            </div>
            <div className="adult-content">
             <strong>Conteúdo adulto:</strong> {"Sim/Não"}
            </div>
            <div className="how-long">
             <strong>Duração:</strong> {"00:00"}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="video">
            <iframe
              width="650"
              height="384"
              src={`https://www.youtube.com/embed/_fGbqxCIL60`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="data">
            < div className="movie-title" >
              {"Nome do Filme"}
            </div>

            <div className="overview">
              <TextareaAutosize
                maxRows={4}
                defaultValue="Sinopse: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua."  
                 style={{width:500, height:150}}              
              />
            </div>
            <div className="original-title">
             <strong>Titulo Original:</strong> {"Titulo Original"}
            </div>
            <div className="genres">
             <strong>Gêneros:</strong> {"Gêneros"}
            </div>
            <div className="date">
             <strong>Data de estreia:</strong> {"00:00:0000"}
            </div>
            <div className="adult-content">
             <strong>Conteúdo adulto:</strong> {"Sim/Não"}
            </div>
            <div className="how-long">
             <strong>Duração:</strong> {"00:00"}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="video">
            <iframe
              width="650"
              height="384"
              src={`https://www.youtube.com/embed/_fGbqxCIL60`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="data">
            < div className="movie-title" >
              {"Nome do Filme"}
            </div>

            <div className="overview">
              <TextareaAutosize
                maxRows={4}
                defaultValue="Sinopse: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua."  
                 style={{width:500, height:150}}              
              />
            </div>
            <div className="original-title">
             <strong>Titulo Original:</strong> {"Titulo Original"}
            </div>
            <div className="genres">
             <strong>Gêneros:</strong> {"Gêneros"}
            </div>
            <div className="date">
             <strong>Data de estreia:</strong> {"00:00:0000"}
            </div>
            <div className="adult-content">
             <strong>Conteúdo adulto:</strong> {"Sim/Não"}
            </div>
            <div className="how-long">
             <strong>Duração:</strong> {"00:00"}
            </div>
          </div>
        </Carousel.Item>

          

      </Carousel>

    </div>
  )
};


export default CarouselDefault;
