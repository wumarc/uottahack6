
import Link from 'next/link'
import Card from 'react-bootstrap/Card';

export const Item = ({ name, price, originalPrice, image, link }) => {

  return (
    <Link
      href="/product"
    >
      <Card 
        border="secondary" 
        style={{ width: '18rem'}}
      >
        <Card.Img variant="top" src={image} height={210} width={80}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <p className="card-text" style={{ textDecoration: 'line-through' }}>
          {originalPrice} </p>
        </Card.Body>
      </Card>
    </Link>
  );
}