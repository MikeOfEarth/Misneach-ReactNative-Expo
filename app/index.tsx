import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function HomeScreen() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="genderSelect"
              id="genderMale"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="genderSelect"
              id="genderFemale"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group className="mb-3" id="noDnD">
        <Form.Check type="checkbox" label="I Agree to Never Drink and Drive" />
      </Form.Group>

      <Form.Group className="mb-3" id="tNC">
        <Form.Check type="checkbox" label="I understand this is for education and entertainment purposes only and is not medical advice" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
