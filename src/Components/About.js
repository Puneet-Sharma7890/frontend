import { Row, Col, Container } from "react-bootstrap";
import img1 from "../Imagess/About3.webp";
import img2 from "../Imagess/About4.avif";
import img3 from "../Imagess/About5.jpg";
import { Card } from "react-bootstrap";
import { Footer } from "./Footer";

function About() {
  return (
    <>
      <Container fluid style={{ fontFamily: 'Times New Roman'}}>
        <Row style={{ marginTop: '30px' }}>
          <h1 style={{ textAlign: "center", marginTop: "10px", fontSize: '50px' }}>
            Our Mission
          </h1>

          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "black",
                border: "none",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>
                    Empowering Spiritual Journeys with Seamless Experiences{" "}
                  </h3>
                </Card.Title>
                <Card.Text>
                  At Chardham Yatra, our mission is to provide pilgrims with a
                  seamless and spiritually fulfilling journey to the sacred
                  Chardham destinations. We are committed to crafting
                  personalized travel experiences that honor the spiritual
                  significance of Yamunotri, Gangotri, Kedarnath, and Badrinath
                  while ensuring comfort and convenience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "black",
                border: "none",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>
                    Dedicated to Excellence in Pilgrimage Travel{" "}
                  </h3>
                </Card.Title>
                <Card.Text>
                  We strive to uphold the highest standards of service and
                  reliability, ensuring that every aspect of the pilgrimage—from
                  accommodation and transportation to guided tours—meets our
                  rigorous quality benchmarks. By blending deep local knowledge
                  with a commitment to customer satisfaction, we aim to enhance
                  every traveler's journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Rows and Cards */}
        <Row style={{ marginTop: "30px" }}>
          <h1 style={{ textAlign: "center" }}>About Our Company</h1>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "black",
                border: "none",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>
                    A Legacy of Devotion and Excellence
                  </h3>
                </Card.Title>
                <Card.Text>
                  At Chardham Yatra, our mission is to provide pilgrims with a
                  seamless and spiritually fulfilling journey to the sacred
                  Chardham destinations. We are committed to crafting
                  personalized travel experiences that honor the spiritual
                  significance of Yamunotri, Gangotri, Kedarnath, and Badrinath
                  while ensuring comfort and convenience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "black",
                border: "none",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>
                    Commitment to a Transformative Travel Experience
                  </h3>
                </Card.Title>
                <Card.Text>
                  Our company is driven by a mission to offer more than just a
                  travel service; we aim to create transformative experiences
                  that resonate with the soul. By focusing on every detail—from
                  meticulously planned itineraries to personalized
                  support—Chardham Yatra ensures that each pilgrimage is both
                  comfortable and spiritually uplifting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md={6}>
            <div className="App">
              <video
              
                width="100%"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src={require("../Imagess/Mountains4.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
          <Col md={6}>
            <h1 style={{ textAlign: "center" }}>Our Journey</h1>
            <p style={{ marginLeft: "30px" }}>
              1.Founded with a vision to provide meaningful and hassle-free
              pilgrimage experiences.
              <br />
              <br />
              2.Trusted name in spiritual tourism with a team of passionate
              travel experts.
              <br />
              <br />
              3.Specializes in the spiritual significance of Yamunotri,
              Gangotri, Kedarnath, and Badrinath.
              <br />
              <br />
              4.Years of experience in organizing Chardham tours.
            </p>
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Our Services</h1>
          <Col md={6} style={{ marginTop: "20px" }}>
            <Card className="custom-card card2"
              style={{ backgroundColor: "aliceblue", color: "black", border: "none" }}>
              <Card.Img
                variant="top"
                src={img1}
                
                className="custom-card-img"
                style={{ height: "45vh" }}
              />
            </Card>
          </Col>
          <Col md={6} style={{ marginTop: "20px" }}>
            <h4>Provide 5 Star hotels for night stays</h4>
            <p>
              <b>1. World-Class Service</b>: Enjoy attentive service from highly
              trained staff dedicated to making your stay as pleasant as
              possible.
            </p>
            <p>
              <b>2. Elegant Rooms and Suites</b>: Relax in beautifully appointed
              rooms and suites, designed with luxury and comfort in mind.
            </p>
            <p>
              <b>3. Gourmet Dining</b>: Indulge in a variety of fine dining
              options, featuring exquisite cuisine prepared by top chefs.
            </p>
            <p>
              <b>4. Prime Locations</b>: Stay in prime locations offering
              stunning views and convenient access to the sacred sites.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={6}>
            <h4>Transportation</h4>
            <p>
              <b>1. Comfortable Seating</b>: Travel in comfort with
              ergonomically designed seats that provide ample support and space
              for relaxation.
            </p>
            <p>
              <b>2. Air-Conditioned Buses</b>: Enjoy a pleasant journey with our
              fully air-conditioned buses that keep you cool and comfortable
              throughout your trip.
            </p>
            <p>
              <b>3. Experienced Drivers</b>: Benefit from the expertise of our
              professional and experienced drivers, ensuring a safe and smooth
              journey.
            </p>
            <p>
              <b>4. Timely and Reliable Service</b>: Rely on our punctual and
              dependable bus services, designed to keep you on schedule and make
              your journey seamless.
            </p>
          </Col>
          <Col md={6}>
            <Card className="custom-card card2"
              style={{ backgroundColor: "aliceblue", color: "black", border: "none" }}>
              <Card.Img
                variant="top"
                src={img2}
                className="custom-card-img"
                style={{ height: "45vh" }}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md={6} style={{ marginTop: "20px" }}>
            <Card className="custom-card card2"
              style={{ backgroundColor: "aliceblue", color: "black", border: "none" }}>
              <Card.Img
                variant="top"
                src={img3}
                className="custom-card-img"
                style={{ height: "45vh" }}
              />
            </Card>
          </Col>
          <Col md={6} style={{ marginTop: "20px" }}>
            <h4>Custom Packages</h4>
            <p>
              <b>1. Luxury Accommodations</b>: Enjoy stays in premium hotels and
              lodges selected for their comfort and quality, ensuring a restful
              experience.
            </p>
            <p>
              <b>2. Expert Guides</b>: Benefit from the knowledge of experienced
              local guides who provide insightful commentary and ensure a smooth
              travel experience.
            </p>
            <p>
              <b>3. Flexible Travel Options</b>: Choose from various
              transportation modes, including private vehicles and comfortable
              coaches, to match your travel style.
            </p>
            <p>
              <b>4. Exclusive Experiences</b>: Access special activities and
              unique experiences, such as guided pilgrimages and cultural tours,
              to enrich your journey.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 style={{ textAlign: "center" }}>Our Commitment</h1>
            <Card className="custom-card card2" style={{backgroundColor:'aliceblue'}}>
              <Card.Body className="custom-card-body">
                <Card.Title></Card.Title>
                <Card.Text>
                  <p>
                    Committed to making your pilgrimage a transformative and
                    serene experience.{" "}
                  </p>
                  <p>
                    Dedicated team available to support every step of the way.{" "}
                  </p>
                  <p>
                    {" "}
                    Ensures a spiritually enriching and worry-free journey.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  );
}

export default About;
