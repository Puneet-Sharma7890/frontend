import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Card } from "react-bootstrap";
import axios from "axios";
import img1 from "../Imagess/Tour1.jpg";
import img2 from "../Imagess/Tour2.jpg";
import img3 from "../Imagess/Tour3.jpeg";
import img4 from "../Imagess/Tour4.jpg";
import img5 from "../Imagess/Tour5.jpg";
import img6 from "../Imagess/Tour6.jpg";
import img7 from "../Imagess/Tour7.jpg";
import img8 from "../Imagess/kedarnath2.jpg";
import img9 from "../Imagess/Tour9.jpg";
import img10 from "../Imagess/Tour10.jpg";
import img11 from "../Imagess/Tour14.jpg";
import img12 from "../Imagess/Tour12.webp";
import img13 from "../Imagess/Tour8.jpg";
import img14 from "../Imagess/Tour13.jpg";
import img15 from "../Imagess/Badrinath.jpg";
import img16 from "../Imagess/Tour15.jpg";
import img17 from "../Imagess/Tour16.jpg";
import img18 from "../Imagess/Tour17.jpg";
function Tours() {
  const cardData = [
    {
      id: 1,
      title: "Kedarnath to Badrinath",
      title2: "Cultural",
      text: "Starts at Kedarnath, passes through Yamnotri and Gangotri, ends at Badrinath.",
      image: img8,
    },
    {
      id: 2,
      title: "Yamnotri to Badrinath",
      title2: "Family",
      text: "Starts at Yamnotri, then visits Kedarnath and Gangotri, and ends at Badrinath.",
      image: img9,
    },
    {
      id: 3,
      title: "Gangotri to Yamnotri",
      title2: "Pilgrimage",
      text: "Starts at Gangotri, then includes Kedarnath and Badrinath, and ends at Yamnotri.",
      image: img10,
    },
    {
      id: 4,
      title: "Badrinath to Kedarnath",
      title2: "Cultural",

      text: "Starts at Badrinath, travels through Yamnotri and Gangotri, and ends at Kedarnath.",
      image: img11,
    },
    {
      id: 5,
      title: "Yamnotri to Kedarnath",
      title2: "Pilgrimage",

      text: "Starts at Yamnotri, passes through Gangotri and Badrinath, and ends at Kedarnath.",
      image: img12,
    },
    {
      id: 6,
      title: "Badrinath to Gangotri",
      title2: "Family",

      text: "Starts at Badrinath, includes Kedarnath and Yamnotri, and ends at Gangotri.",
      image: img13,
    },
    {
      id: 7,
      title: "Gangotri to Kedarnath",
      title2: "Pilgrimage",

      text: "Starts at Gangotri, travels through Badrinath and Yamnotri, and ends at Kedarnath.",
      image: img14,
    },
    {
      id: 8,
      title: "Badrinath to Yamnotri",
      title2: "Cultural",

      text: "Starts at Badrinath, visits Kedarnath and Gangotri, and ends at Yamnotri.",
      image: img15,
    },
    {
      id: 9,
      title: "Yamnotri to Gangotri",
      title2: "Pilgrimage",

      text: "Starts at Yamnotri, includes Badrinath and Kedarnath, and ends at Gangotri.",
      image: img2,
    },
    {
      id: 10,
      title: "Gangotri to Badrinath",
      title2: "Cultural",

      text: "Starts at Gangotri, includes Yamnotri and Kedarnath, and ends at Badrinath",
      image: img16,
    },
    {
      id: 11,
      title: "Kedarnath to Gangotri",
      title2: "Family",

      text: "Starts at Kedarnath, includes Yamnotri and Badrinath, and ends at Gangotri.",
      image: img17,
    },
    {
      id: 12,
      title: "Kedarnath to Yamnotri",
      title2: "Family",

      text: "Starts at Kedarnath, includes Badrinath and Gangotri, and ends at Yamnotri.",
      image: img18,
    },
  ];

  const navigate = useNavigate();
  const handleExplore = (title) => {
    switch (title) {
      case "Family":
        navigate("/family-tours"); // Adjust path to your route
        break;
      case "Pilgrimage":
        navigate("/pilgrimage-tours"); // Adjust path to your route
        break;
      default:
        navigate("/cultural"); // Adjust path to your route
    }
  };
  const handleLogin = async () => {
    try {
      // Fetch the token from localStorage
      const tokenId = localStorage.getItem("token");
      console.log("Token in tour:", tokenId);

      // Send the token to the API endpoint
      const sendResponse = await axios.post(
        "http://localhost:8001/api/checktoken",
        { tokenId }
      );

      if (sendResponse.status === 200) {
        console.log("Token successfully sent to backend");
        navigate("/payment");
      } else {
        console.log("Failed to validate token");
        alert("failed to validate");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", "error comes in catch");
      navigate("/login");
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>
            "Journey to sacred lands, where comfort meets spirituality."
          </h1>

          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "white",
                border: "none",
                width: "100%", // Set to 100% of the column width
                maxWidth: "100%", // Optional: Set a max width for consistency
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>Sacred Destinations</h3>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Journey to revered sites where ancient traditions and
                  spiritual significance converge. Explore the sacred lands of
                  Chardham, where each destination offers a unique spiritual
                  experience. Embrace the serenity and divine essence of these
                  holy places exploration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "white",
                border: "none",
                width: "100%", // Set to 100% of the column width
                maxWidth: "100%", // Optional: Set a max width for consistency
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>Luxurious Accommodations</h3>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Relax in top-tier hotels designed for ultimate comfort and
                  elegance. Each stay is crafted to provide a luxurious retreat,
                  blending modern amenities with serene surroundings. Enjoy
                  unparalleled comfort as you unwind after a day of spiritual
                  exploration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "white",
                border: "none",
                width: "100%", // Set to 100% of the column width
                maxWidth: "100%", // Optional: Set a max width for consistency
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>Spiritual Experiences </h3>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Immerse yourself in enriching spiritual practices and
                  ceremonies. Our carefully planned itineraries offer profound
                  experiences that connect you deeply with the sacred sites.
                  Engage in rituals that enhance your spiritual journey and
                  provide lasting memories.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="custom-card card2"
              style={{
                backgroundColor: "aliceblue",
                color: "white",
                border: "none",
                width: "100%", // Set to 100% of the column width
                maxWidth: "100%", // Optional: Set a max width for consistency
              }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title>
                  <h3 style={{ color: "black" }}>Seamless Journey</h3>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Experience a journey where every detail is managed with
                  precision. From private transport to personalized services,
                  enjoy a smooth and luxurious pilgrimage. Our dedicated team
                  ensures that your spiritual adventure is as effortless and
                  memorable as possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 style={{ textAlign: "center" }}>Our Popular Packages</h1>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "10px",
          }}
        >
          <Col md={3} style={{ marginTop: "30px" }}>
            <Card className="custom-card card1">
              <Card.Img
                variant="top"
                src={img1}
                className="custom-card-img"
                style={{ height: "40vh" }}
              />
              <Card.Body className="custom-card-body">
                <Card.Title>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Book Tour
                  </button>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} style={{ marginTop: "30px" }}>
            <Card className="custom-card card1">
              <Card.Img
                variant="top"
                src={img2}
                className="custom-card-img"
                style={{ height: "40vh" }}
              />
              <Card.Body className="custom-card-body">
                <Card.Title>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Book Tour{" "}
                  </button>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={3} style={{ marginTop: "30px" }}>
            <Card className="custom-card card1">
              <Card.Img
                variant="top"
                src={img3}
                className="custom-card-img"
                style={{ height: "40vh" }}
              />
              <Card.Body className="custom-card-body">
                <Card.Title>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Book Tour
                  </button>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={3} style={{ marginTop: "30px" }}>
            <Card className="custom-card card1">
              <Card.Img
                variant="top"
                src={img4}
                className="custom-card-img"
                style={{ height: "40vh" }}
              />
              <Card.Body className="custom-card-body">
                <Card.Title>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Book Tour{" "}
                  </button>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            Categories of Tours
          </h1>
        </Row>

        {/* Categories of tours  */}
        <Row>
          <Col md={12}>
            <Row style={{ marginTop: "30px" }}>
              <Col md={4}>
                <Card className="custom-card card1">
                  <Card.Img
                    variant="top"
                    src={img6}
                    className="custom-card-img"
                    style={{ height: "40vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title> Cultural Tours</Card.Title>
                    <Card.Text>
                      These tours include visits to nearby cultural and
                      historical sites, offering a deeper understanding of the
                      region’s heritage alongside the spiritual journey.
                    </Card.Text>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleExplore("Cultural")}
                    >
                      Explore
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card card1">
                  <Card.Img
                    variant="top"
                    src={img7}
                    className="custom-card-img"
                    style={{ height: "40vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title> Pilgrimage Tours </Card.Title>
                    <Card.Text>
                      Focused on spiritual enrichment, these tours provide a
                      deep connection with the sacred sites, including guided
                      rituals and visits to all four Dhams.
                    </Card.Text>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleExplore("Pilgrimage")}
                    >
                      Explore
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="custom-card card1">
                  <Card.Img
                    variant="top"
                    src={img5}
                    className="custom-card-img"
                    style={{ height: "40vh" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title> Family Tours</Card.Title>
                    <Card.Text>
                      Perfect for families, these tours offer a balanced mix of
                      spiritual, cultural, and leisure activities, ensuring
                      something for everyone in the family.
                    </Card.Text>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleExplore("Family")}
                    >
                      Explore
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Available Tours
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}></Col>
        </Row>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} md={4} style={{ marginTop: "30px" }}>
              <Card className="custom-card card1">
                <Card.Img
                  variant="top"
                  src={card.image}
                  className="custom-card-img"
                  style={{ height: "40vh" }}
                />
                <Card.Body className="custom-card-body">
                  <Card.Title>
                    Tour {index + 1} : {card.title}
                    <br />
                    <br />
                    <h6>Type of Tour : {card.title2}</h6>
                  </Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ marginRight: "20px" }}
                    onClick={() => handleLogin(card.title2)}
                  >
                    Book Tour
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => handleExplore(card.title2)}
                  >
                    Explore
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12}>
            <h1 style={{ textAlign: "center" }}>
              Guiding Your Spiritual Path with Care and Excellence
            </h1>
            <Card
              className="custom-card card2"
              style={{ backgroundColor: "lavender" }}
            >
              <Card.Body className="custom-card-body">
                <Card.Title></Card.Title>
                <Card.Text>
                  <p>
                    Our mission is to guide you on a journey that transcends the
                    physical and touches the spiritual.
                  </p>
                  <p>
                    With unwavering dedication, we curate every moment of your
                    Chardham Yatra, ensuring that it is not only serene and
                    seamless but also deeply meaningful.
                  </p>
                  <p>
                    Our team of experienced professionals is more than just a
                    service provider; we are your companions on this sacred
                    path, committed to making every step of your pilgrimage
                    enriching and uplifting.
                  </p>
                  <p>
                    We take pride in our attention to detail, allowing you to
                    immerse fully in the spiritual significance of the Yatra,
                    free from worry, knowing that your comfort and safety are
                    our top priorities.
                  </p>
                  <p>
                    Embark on this sacred journey with us, and discover a
                    renewed sense of peace, purpose, and connection.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
export default Tours;
