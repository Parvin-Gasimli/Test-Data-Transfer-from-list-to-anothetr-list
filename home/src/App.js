import Categorylist from "./CategoryList";
import Navi from "./Navi";
import Productlist from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let TitleProduct={title:"Hi Product",any:"hello Pro"};
  let TitleCategory="Hello Category";
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3"> 
           <Categorylist info={TitleCategory} />
          </Col>
          <Col xs="9">
          <Productlist  info={TitleProduct} />
          </Col>
         
    
        </Row>
      </Container>
    </div>
  );
}

export default App;
