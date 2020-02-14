import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './ProgramsContent.css'

export const ProgramsContent = () => (
  <React.Fragment>
    <Container>
        <h1>Earn an Amazon Web Services Certification</h1>
        <p>Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. ​Learn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions. </p>
        <Row className="programRow"style={{color:"white", marginBottom: '20px'}}>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile1">
                    <div>
                        <h3>Science Behind Learning</h3>
                        <p>The Science Behind Learning Certification program is a 2-day in-person professional development program dedicated to Education sector professionals. This program is designed for the educator audience, including teachers, administrators, and anyone working in the education sector with students. Upon completing this learning experience, participants will have the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive out-comes and to create more brain friendly learning environments and experiences.</p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="/sbls" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile2">
                    <div>
                        <h3>STEAM Coach</h3>
                        <p>The curriculum is designed to engage educators with hands-on activities and exercises intended to help educators experience and learn how design thinking produces outcome through product development and all the roles involved in the process. Educators will be provided opportunities to gain experience in all aspects of an entrepreneurial experience, and how to engage students in this process within the classroom structure. The content can be approached in several different ways and is easily adaptable to a variety of situations. Each unit contains suggested sample activities, but instructors are provided clear learning topics to allow them the freedom to develop their own exercises. Likewise, sample student objectives are suggested but the instructor has the freedom to create specific objectives to match their own exercises and assignments. </p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="/STEAMCoach" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile3">
                    <div>
                        <h3>Computer Science Teaching Certification</h3>
                        <p>Through our Computer Science Certification, we help students and teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning.</p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="/cstc" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile3">
                    <div>
                        <h3>Drones</h3>
                        <p>Students who take introduction to Coding in Middle School increases their likelihood to take Computer Science in high school, which results in students that are more likely to take computer science in college. To prepare students for the future, teachers need access to coursework that will support their success in introducing students to these growing career fields. Our goal is to help schools engage their students in learning to code through fun engaging project-based learning experiences that integrate technology like Drones that support the understanding of applied math and real-world problem solving.</p>
                        <div id="spacer" style={{height: '10px'}} ></div>
                        <Button style={{marginBottom: '25px'}}className="contentCentered"  href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:STEAM%20Drones%20Professional%20Development%20%28in-person%29" variant="light">Book an in Person Session</Button>
                        <Button style={{marginBottom: '25px'}}className="contentCentered"  href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:STEAM%20Drones%20Professional%20Development%20%28virtual%29" variant="light">Book a Virtual Session</Button>                    
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile1">
                    <div>
                        <h3>Minecraft:EE</h3>
                        <p>Master the basic controls of MEE, explore the inventory and build your first house! Travel via rail to experience a different mode of transport offered within this platform, investigate differing lesson ideas to show how MEE can be used in all curriculums / subjects in countless ways. By the end of the session, teachers should feel confident in using MEE and should have generated a plethora of ideas of how to use this amazing platform within their pedagogy.</p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="mailto:sales@neublaacademyny.com" variant="light">Get More Info</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile2">
                    <div>
                        <h3>Microsoft MIE</h3>
                        <p>Participants will spend the day getting excited about the many tools Microsoft has to offer students and teachers. Teachers will reflect and create a customized toolkit of resources to increase engagement, efficiency and develop modern skills for a global classroom/society.</p>
                        <p>Participants will engage in a series of immersive learning activities that will build a strong understanding of how to use technology to improve instruction and meet the learning needs of their students.</p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="mailto:sales@neublaacademyny.com" variant="light">Get More Info</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </React.Fragment>
)
