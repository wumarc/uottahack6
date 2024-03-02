
import Link from 'next/link'
import Card from 'react-bootstrap/Card';

export const Item = () => {
  return (
    <Link
      href="/product"
    >
      <Card 
        border="secondary" 
        style={{ width: '18rem'}}
      >
        <Card.Img variant="top" src="https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8de7e495/images/hi-res/20655_BSNG.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5" height={210} width={80}/>
        <Card.Body>
          <Card.Title>White Sweater</Card.Title>
          <Card.Text>
            $50
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}