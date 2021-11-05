import Card from 'react-bootstrap/Card';
import Samuel from '../../../assets/Samuel.jpg';
import './jcss.css';


function Cards(props) {    
        return (            
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'http://image.tmdb.org/t/p/original' + props.movies.poster_path} />
                    <Card.Body>
                        <Card.Title> {props.movies.original_title}</Card.Title>                       
                    </Card.Body>
                </Card>
            </>
        )

}

function CardsVazios(){
    return (
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Samuel} />
                        <Card.Body>
                            <Card.Title> Samuel Faioli </Card.Title>
                            <Card.Text>
                                Selecione um Gênero para trocar os cards.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )
}

export  {Cards, CardsVazios};

