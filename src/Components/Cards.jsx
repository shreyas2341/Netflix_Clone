import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({name,img}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img className='card_img' variant="top" src={img} />
      <Card.Body className='bg-black text-white'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Play it ⚡</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;