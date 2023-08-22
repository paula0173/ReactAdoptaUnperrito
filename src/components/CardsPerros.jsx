
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const CardsPerros = ({imagen, titulo, texto, raza, color}) => {
  return (
    <div className="p-3">
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="fs-5 strong"> {titulo} </Card.Title>
          <Card.Text className='fw-light small'>
            {texto}
          </Card.Text>

          <Tags raza = {raza} color ={color}/>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardsPerros