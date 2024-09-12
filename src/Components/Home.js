import React from "react"; // Ensure React is imported
import { Row, Col, Container } from "react-bootstrap"; // Correct import statement for Image
import { useNavigate } from "react-router-dom";
import img1 from "../Imagess/Badrinath.jpg";
import img2 from "../Imagess/kedarnath.jpg";
import img3 from "../Imagess/badrinath2.jpg";
import img4 from "../Imagess/kedarnath2.jpg";
import img5 from "../Imagess/History.webp";
import img6 from "../Imagess/Package1.jpeg";
import img7 from "../Imagess/Package2.jpg";
import img8 from "../Imagess/Package3.jpg";
import img9 from "../Imagess/Blogs.jpeg";
import Backgroundvideo from "./Backgroundvideo";
import { Footer } from "./Footer";
// import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
function Home() {
  const navigate = useNavigate();
  const history = (title) => {
    navigate("/chardhamhistory")
  };
  const Loginhandler = ()=>{
    navigate("/login")
  }
  return (
    <>
      <Backgroundvideo />
      <Container fluid>
        <Row>
          <Col>
            <h1
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "5vw",
                marginBottom: "10px",
              }}
            >
              Popular Destination
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h1>Shri Badrinath</h1>
            <p>
              The Badrinath Temple, located in Uttarakhand, India, is a
              significant pilgrimage site dedicated to Lord Vishnu. Its origins
              are rooted in Hindu mythology, with mentions in ancient scriptures
              like the Mahabharata and Puranas. The temple gained prominence in
              the 8th century when Adi Shankaracharya revitalized it. Over the
              centuries, it has faced natural disasters but has been rebuilt and
              maintained by local rulers and devotees. Today, it remains a major
              destination for pilgrims, with modern renovations ensuring its
              accessibility and preservation
            </p>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Card className="custom-card card1">
                  <Card.Img
                    variant="top"
                    src={img1}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>Badrinath Temple In Uttarakhand</Card.Title>
                    <Card.Text>
                      The Badrinath Temple, located in Uttarakhand, India, is a
                      revered Hindu shrine dedicated to Lord Vishnu and an
                      essential pilgrimage destination in the Char Dham circuit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="custom-card card1">
                  <Card.Img
                    variant="top"
                    src={img3}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>
                      The Significance of Pilgrimage Temples
                    </Card.Title>
                    <Card.Text>
                      Pilgrimage temples hold deep spiritual value, drawing
                      devotees who seek divine blessings and participate in
                      sacred rites. These temples are central to religious
                      practices, offering a place of reflection .
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Col md={6}>
                
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ margin: "50px" }}>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Card className="custom-card card2">
                  <Card.Img
                    variant="top"
                    src={img2}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>Kedarnath Temple</Card.Title>
                    <Card.Text>
                      The Kedarnath Temple, nestled in the Himalayas of
                      Uttarakhand, is a sacred site dedicated to Lord Shiva and
                      a key pilgrimage destination.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="custom-card card2">
                  <Card.Img
                    variant="top"
                    src={img4}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>The Sacred Pilgrimage of Kedarnath</Card.Title>
                    <Card.Text>
                      Kedarnath is a revered destination where pilgrims seek
                      divine blessings amidst its serene, high-altitude
                      beauty,nestled in the Himalayas of Uttarakhand.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <h1>Shri Kedarnath</h1>
            <p>
              The Kedarnath Temple, situated in the Himalayas of Uttarakhand,
              India, is one of the most revered Hindu pilgrimage sites dedicated
              to Lord Shiva. Its origins are traced back to the time of the
              Pandavas, who are believed to have established the temple as a
              penance for their sins after the Kurukshetra War. The temple's
              current structure, however, is attributed to the 8th-century
              philosopher Adi Shankaracharya, who revitalized the site.
              Kedarnath has faced numerous natural calamities over the
              centuries, including devastating floods in 2013, but it remains a
              vital center of devotion and spirituality, attracting pilgrims
              from across India and the world.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "5vw",
                marginBottom: "10px",
              }}
            >
              History of Chardham
            </h1>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col md={12}>
            <Card className="custom-card card2">
              <Card.Img variant="top" src={img5} className="custom-card-img " />
              <Card.Body className="custom-card-body">
                <Card.Title>The Chardham Yatra</Card.Title>
                <Card.Text>
                  The Chardham Yatra refers to a revered pilgrimage in the
                  Indian state of Uttarakhand, encompassing four sacred sites:
                  Yamunotri, Gangotri, Kedarnath, and Badrinath. These sites are
                  significant to Hindu devotees and are nestled in the
                  Himalayas. The journey is believed to purify the soul and
                  offer spiritual salvation. Each location is associated with
                  important deities and ancient legends. The pilgrimage attracts
                  thousands annually, seeking divine blessings and spiritual
                  fulfillment.
                </Card.Text>
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={history}
                >
                  Click Here To see Chardham History!
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1
              style={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              Our Popular Packages
            </h1>
          </Col>
        </Row>

        <Row >
          <Col md={12} style={{marginTop:'40px'}}>
            <Row>
              <Col md={4}>
                <Card className="custom-card card2">
                  <Card.Img
                    variant="top"
                    src={img6}
                    className="custom-card-img"
                    style={{ height: "45vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>
                      <button class="btn btn-primary" type="submit" onClick={()=>{Loginhandler()}}>
                        Book Tour1
                      </button>
                    </Card.Title>
                    <Card.Text>
                      Start-Haridwar<br></br>
                      End-Badrinath
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card card2">
                  <Card.Img
                    variant="top"
                    src={img7}
                    className="custom-card-img"
                    style={{ height: "45vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>
                      <button class="btn btn-primary" type="submit" onClick={()=>{Loginhandler()}}>
                        Book Tour 2
                      </button>
                    </Card.Title>
                    <Card.Text>
                      Start-Yamnotri<br></br>
                      End-Gangotri
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card card2">
                  <Card.Img
                    variant="top"
                    src={img8}
                    className="custom-card-img"
                    style={{ height: "45vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title>
                      <button class="btn btn-primary" type="submit" onClick={()=>{Loginhandler()}}>
                        Book Tour 3
                      </button>
                    </Card.Title>
                    <Card.Text>
                      Start-Kedarnath<br></br>
                      End-Yamnotri
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "aliceblue" }}>
          <Col md={12}>
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <h3 style={{ textAlign: "center" }}>
              Chardham Yatra: A Divine Journey
            </h3>
            <p style={{ textAlign: "center", fontSize: "18px" }}>
              Welcome to our Chardham Yatra portal, your gateway to one of the
              most revered spiritual pilgrimages in India. Our website is
              dedicated to providing an enriching and hassle-free journey to the
              four sacred shrines of Uttarakhand: Yamunotri, Gangotri,
              Kedarnath, and Badrinath. Explore detailed information about each
              of the Dhams, including their historical significance, travel
              guides, and essential tips for pilgrims. We offer a comprehensive
              range of services, from customized tour packages to comfortable
              accommodation options, ensuring a seamless experience for
              devotees. Whether you're planning your first Yatra or returning
              for another spiritual journey, our platform is designed to cater
              to all your needs with ease and convenience. Join us in
              experiencing the divinity and serenity of the Chardham Yatra, and
              let us be your trusted companion in this sacred expedition.
              <br></br>
              <a href="/about">
                <button
                  type="button"
                  class="btn btn-info"
                  style={{ fontSize: "20px" }}
                >
                  More About Us
                </button>
              </a>
            </p>
          </Col>
        </Row>

        <Row style={{ position: "relative" }}>
          <Col md={12} style={{ padding: 0, position: "relative" }}>
            <Image
              src={img9}
              style={{ width: "100%", height: "60vh", objectFit: "cover" }}
            />
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  color: "white",
                }}
              >
                Our Latest Blogs
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                zIndex: 2,
                padding: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: for better readability of the text
                borderRadius: "10px",
                display: "flex",
                gap: "10px",
              }}
              className="blogs"
            >
              <div style={{ display: "block", gap: "10px" }}>
                <h3>Travel Guides</h3>
                <p>
                  Learn about the most convenient travel routes and
                  transportation options for your Chardham Yatra. We provide
                  insights into road conditions, popular travel agencies, and
                  key local attractions to enhance your journey.
                </p>
                <a href="/blogs">
                <button type="button" class="btn btn-outline-info">
                  More about Blogs
                </button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;

