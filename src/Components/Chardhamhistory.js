import { Row, Col, Container } from "react-bootstrap";
import img1 from "../Imagess/yamnotri.jpg";
import img2 from "../Imagess/Gangotri.webp";
import img3 from "../Imagess/Kedarnath3.jpg";
import img4 from "../Imagess/Badrinath.jpg";
import { Footer } from "./Footer";
import { Card } from "react-bootstrap";

export function Chardhamhistory() {
 
  return (
    <>
      <Container style={{ backgroundColor: "#FAF3DD" }} fluid>
        <h1 style={{ textAlign: "center" }}>Chardham Yatra: A Brief History</h1>
       
        <Row style={{ marginTop: "20px" }}>
          <Col md={4}>
            <Card className="custom-card card1">
              <Card.Img variant="top" src={img1} className="custom-card-img" />
            </Card>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>Yamunotri: </span><p>This is the
            source of the Yamuna River and is dedicated to Goddess Yamuna.
            According to mythology, the sage Asit Muni lived here, and the
            Yamuna River is revered as his daughter. The temple was built in the
            19th century by the queen of Tehri, Maharani Gularia. She is also
            the sister of Yama, the God of Death. Devotees believe that bathing
            in the waters of the Yamuna at Yamunotri can purify their souls and
            protect them from an untimely death, as Yama promised his sister
            Yamuna that those who bathe in her sacred waters will be spared from
            his punishments. </p>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>
              Historical Significance:{" "}
            </span><p>
            The present-day Yamunotri Temple was built in the 19th century by
            Maharani Gularia of Jaipur. It is said that the temple had to be
            reconstructed several times due to damage from natural calamities.
            The temple enshrines a black marble idol of Goddess Yamuna, which is
            worshiped by thousands of devotees who undertake the challenging
            trek to the temple each year.These cooked offerings, known as
            prasad, are later distributed among the devotees. The trek to
            Yamunotri.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>Gangotri: </span><p>This is the
            origin of the Ganges River and is dedicated to Goddess Ganga.
            According to mythology, King Bhagiratha meditated here to bring the
            river Ganga down from the heavens to earth. The temple was
            originally built by a Gorkha commander named Amar Singh Thapa in the
            early 18th century. Devotees believe that bathing in the waters of
            the Ganges at Gangotri can cleanse their souls and provide
            liberation from the cycle of life and death. The trek to Gangotri is
            considered sacred, involving a journey through picturesque and
            serene landscapes.</p>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>
              Historical Significance:{" "}
            </span><p>
            The present-day Gangotri Temple was constructed in the early 18th
            century by Amar Singh Thapa. Like Yamunotri, the temple has also
            been reconstructed multiple times due to natural disasters. The
            temple enshrines a white stone idol of Goddess Ganga, worshiped by
            thousands of devotees who brave the challenging trek to the temple
            each year. These rituals and offerings, known as prasad, are later
            distributed among the devotees. The trek to Gangotri is a
            spiritually rewarding experience, with the journey through the
            rugged terrain adding to its significance.</p>
          </Col>

          <Col md={4}>
            <Card className="custom-card card1">
              <Card.Img variant="top" src={img2} className="custom-card-img" />
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col md={4}>
            <Card className="custom-card card1">
              <Card.Img variant="top" src={img3} className="custom-card-img" />
            </Card>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>Kedarnath: </span><p>Kedarnath is
            one of the most revered shrines dedicated to Lord Shiva, located in
            the Rudraprayag district of Uttarakhand. According to mythology, the
            temple was originally built by the Pandavas to atone for their sins
            after the Mahabharata war. The present structure was revived by Adi
            Shankaracharya in the 8th century. The temple is part of the twelve
            Jyotirlingas, which are sacred shrines of Shiva. The journey to
            Kedarnath is challenging, involving a trek through the majestic
            Himalayas.</p>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>
              Historical Significance:{" "}
            </span><p >
            The Kedarnath Temple is said to have been built by the Pandavas and
            later restored by Adi Shankaracharya in the 8th century. The temple
            has withstood natural calamities, including floods and earthquakes,
            and continues to be a symbol of resilience and devotion. The shrine
            enshrines a conical rock formation, which is worshiped as the
            "Sadashiva" form of Shiva. Devotees from across the world undertake
            the arduous trek to Kedarnath, seeking spiritual peace and blessings
            from Lord Shiva.</p>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>Badrinath: </span><p>Badrinath is
            dedicated to Lord Vishnu and is one of the most significant
            pilgrimage sites in Hinduism. Located along the banks of the
            Alaknanda River in Uttarakhand, the temple is surrounded by the Nar
            and Narayan mountain ranges. According to mythology, Lord Vishnu
            performed penance here under a Badri tree, giving the place its
            name. The temple was re-established by Adi Shankaracharya in the 8th
            century. The journey to Badrinath is considered a path to salvation.</p>
          </Col>
          <Col md={4}>
            <span style={{ fontWeight: "bold" }}>
              Historical Significance:{" "}
            </span><p>
            The Badrinath Temple has ancient origins and was revived by Adi
            Shankaracharya in the 8th century. The temple has been rebuilt and
            restored multiple times, and it remains a central site of worship
            for devotees of Vishnu. The shrine enshrines a black stone idol of
            Lord Vishnu in a meditative pose. Thousands of pilgrims visit
            Badrinath each year, braving the challenging journey to seek
            blessings and experience the divine presence of Lord Vishnu.</p>
          </Col>

          <Col md={4}>
            <Card className="custom-card card1">
              <Card.Img variant="top" src={img4} className="custom-card-img" />
            </Card>
          </Col>
         
        </Row>
      </Container>
      <Footer />
    </>
  );
}
