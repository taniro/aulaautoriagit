import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';


const Meucard = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="carro.jpeg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mauris malesuada, volutpat massa eget, consequat arcu. Maecenas sollicitudin.
        </Card.Text>
        <Button variant="primary">Adicionar ao carrinho...</Button>
        </Card.Body>
    </Card>
    )
}

export default Meucard;