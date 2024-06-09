
import { Button, Container, Row, Col } from "reactstrap";

const DoctorCreateHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      >
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. Enter all of your information
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DoctorCreateHeader;
