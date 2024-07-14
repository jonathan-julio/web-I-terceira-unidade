import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Nav, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Abs = () => {

  const clients = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4'
    // Add more clients as needed
  ];

  const Clients = () => {
    return (
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>Clients</Card.Title>
          <Row>
            {clients.map((client, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="bg-secondary text-white">
                  <Card.Body>
                    <Card.Text>{client}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    );
  };
  const testimonials = [
    { name: 'Daniel Lewis', feedback: 'Richard was hired to create a corporate identity. We were very pleased with the work done.' },
    { name: 'Jessica Miller', feedback: 'We were very pleased with the work done.' }
  ];

  const Testimonials = () => {
    return (
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>Testimonials</Card.Title>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="bg-secondary text-white">
                  <Card.Body>
                    <Card.Text>{testimonial.feedback}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">- {testimonial.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const Resumo = () => {
    return (
      <Card className="bg-dark text-white mb-4">
        <Card.Body id='labelCard'>
          <Card.Title>Resumo</Card.Title>
          <Card.Text>
            This is the resumo section.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const Portfolio = () => {
    return (
      <Card className="bg-dark text-white mb-4">
        <Card.Body id='labelCard'>
          <Card.Title>Portfolio</Card.Title>
          <Card.Text>
            This is the portfolio section.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const Blog = () => {
    return (
      <Card className="bg-dark text-white mb-4">
        <Card.Body id='labelCard'>
          <Card.Title>Blog</Card.Title>
          <Card.Text>
            This is the blog section.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const Contato = () => {
    return (
      <Card className="bg-dark text-white mb-4">
        <Card.Body id='labelCard' >
          <Card.Title>Contato</Card.Title>
          <Card.Text>
            This is the contato section.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const About = () => {
    return (
      <Card className="bg-dark text-white " >
        <Card.Body id='labelCard'>
          <Card.Title >About Me</Card.Title>
          <Card.Text   >
            I am a Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            My aim is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web designs for many famous brand companies.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const Sidebar = () => {
    return (
      <Card className="text-center text-white  py-4 px-0" id='sidebar' style={{ background: '#1e1e1e' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&s" alt="Richard hanrick" />
        <h3>Richard hanrick</h3>
        <Card.Body className=' justify-content-center'>
          <ListGroup className="d-flex  justify-content-center list-group-flush">
            <ListGroupItem style={{ background: '#1e1e1e' }} className="text-white pt-4 mx-4"><i className="bi "></i>Web Developer</ListGroupItem>
            <ListGroupItem style={{ background: '#1e1e1e' }} className="text-white pt-4 mx-4"><i className="bi "></i> Sacramento, California, USA</ListGroupItem>
            <ListGroupItem style={{ background: '#1e1e1e' }} className="text-white pt-4 mx-4"><i className="bi "></i> June 23, 1982</ListGroupItem>
            <ListGroupItem style={{ background: '#1e1e1e' }} className="text-white pt-4 mx-4"><i className="bi "></i> richard@example.com</ListGroupItem>
            <ListGroupItem style={{ background: '#1e1e1e' }} className="text-white pt-4 mx-4"><i className="bi "></i> (530) 238-2795</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  };

  const services = [
    { title: 'Web Design', description: 'The most modern and high-quality design made at a professional level.' },
    { title: 'Web Development', description: 'High-quality development of sites at the professional level.' },
    { title: 'Mobile Apps', description: 'Professional development of applications for iOS and Android.' },
    { title: 'Photography', description: 'I make high-quality photos of any category at a professional level.' }
  ];

  const Services = () => {
    return (
      <Row>
        {services.map((service, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="bg-dark text-white">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const handleFolderClick = (content) => {
    // Implemente aqui o que deseja fazer quando o usuário clicar no elemento
    alert(`Você clicou no elemento com conteúdo: ${content}`);
  };

  return (
    <>
      <div style={{ background: "#111111" }}>
        <Container fluid className="bodyPage p-3 p-sm-5">
          <Row className='d-flex justify-content-center'>
            <Col md={11} lg={3}>
              <Sidebar />
            </Col>
            <Col md={11} lg={8}>
              <div className='folder' bg="dark" variant="dark">
                <nav className="navbar-expand-sm navbar navbar-light justify-content-between" style={{ zIndex: "2", width: "100%" }}>
                  <div className="row justify-content-between w-100">
                    <div className='col-sm-4 col-md-5 col-lg-3 w-25 d-flex justify-content-start'>
                      <h4 className='ml-0 my-2 px-5' style={{ color: "white" }}>About</h4>
                    </div>
                    <button className="w-25 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='col-sm-5 col-md-7 col-lg-7'>
                      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                          <a className="nav-item nav-link mx-lg-2 mx-md-3 mx-sm-1 active"  href="#">Home</a>
                          <a className="nav-item nav-link mx-lg-2 mx-md-3 mx-sm-0" href="#">Features</a>
                          <a className="nav-item nav-link mx-lg-2 mx-md-3 mx-sm-1" href="#">Pricing</a>
                          <a className="nav-item nav-link mx-lg-2 mx-md-3 mx-sm-0 disabled" href="#">Disabled</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
  
};

export default Abs;

/* 

<div className="navbar-logo-left d-block w-100">
                  <nav className="navbar navbar-expand- w-50  d-block navbar-light ">
                    <div className="container row justify-content-start">
                      <a className="navbar-brand d-flex justify-content-start" href="/">
                        ola
                      </a>
                      <div className=" d-flex justify-content-end" style={{ 'z-index': '3' }} id="">
                        <ul className="navbar-nav" id="header-user">
                          <li className="nav-item mx-2 custom-item"><a className="nav-link" href="/workspace">About</a></li>
                          <li className="nav-item mx-2"><a className="nav-link" href={`/portfolio/${localStorage.login}`} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                          <li className="nav-item mx-2"><a className="nav-link" href="/admin">Administrador</a></li>
                          <li className="nav-item mx-2"><a className="nav-link" href="/personalizar">Personalizar</a></li>
                          <li className="nav-item mx-2"><a className="nav-link" href="/editar-perfil">Perfil</a></li>
                          <li className="nav-item mx-2"><a className="btn btn-dark ml-3" href="/">Sair</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>*/