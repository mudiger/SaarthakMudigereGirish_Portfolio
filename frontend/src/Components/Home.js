import React from "react";
import About from "./about";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <About />
    </div>
    // <h1>This is Saarthak!</h1>
    // <section>
    //   <Container fluid className="home-section" id="home">
    //     <Particle />
    //     <Container className="home-content">
    //       <Row>
    //         <Col md={7} className="home-header">
    //           <h1 style={{ paddingBottom: 15 }} className="heading">
    //             Hi There!{" "}
    //             <span className="wave" role="img" aria-labelledby="wave">
    //               👋🏻
    //             </span>
    //           </h1>

    //           <h1 className="heading-name">
    //             I'M
    //             <strong className="main-name"> SAARTHAK MUDIGERE GIRISH</strong>
    //           </h1>

    //           <div style={{ padding: 50, textAlign: "left" }}>
    //             <Type />
    //           </div>
    //         </Col>

    //         <Col md={5} style={{ paddingBottom: 20 }}>
    //           <img
    //             src={homeLogo}
    //             alt="home pic"
    //             className="img-fluid"
    //             style={{ maxHeight: "450px" }}
    //           />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </Container>
    //   <Home2 />
    // </section>
  );
}

export default Home;
