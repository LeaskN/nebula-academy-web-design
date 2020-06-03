import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './ProgramsContent.css'

export const ProgramsContent = () => (
  <React.Fragment>
    <Container>
        <h1>Build your capacity to teach through our innovative learning programs</h1>
        <p>Our mission is to support educators and technology instructors in building their capacity to teach computer science in today's modern classroom. We help our customers understand the latest cognitive neuroscience research and how that research can be applied in the classroom to develop more engaging learning experiences that product greater learning outcomes.</p>
        <Row className="programRow"style={{color:"white", marginBottom: '20px'}}>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile1">
                    <div>
                        <h3>Science Behind Learning</h3>
                        <p>The Science Behind Learning Certification program is a 2-day in-person professional development program dedicated to Education professionals. This program is designed for teachers, administrators, and anyone working with students and adults in a learning program.  Upon completing this learning experience, participants will have the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive out-comes. Understanding the latest cognitive neuroscience research participants learn the science behind how we learn and how that knowledge can be utilized to shape more engaging learning experiences.</p>
                        <div id="spacer" style={{height: '90px'}}></div>
                        <Button style={{marginBottom: '125px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=13071791" variant="light">Register for In-Person</Button>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=14132536" variant="light">Register for Live-Virtual</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered" href="/sbls" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile2">
                    <div>
                        <h3>STEAM Coach</h3>
                        <p>This program is designed to engage educators with hands-on activities and exercises using design thinking as a foundation for developing curriculum and student centered learning experiences Participants learn how to incorporate 21st century learning approaches with rubrics that are guided by a design thinking framework. Educators are provided opportunities to gain experience in all aspects of an entrepreneurial framework, and how to engage students in this process within the classroom structure. The content can be approached in several different ways and is easily adaptable to a variety of situations. Each unit contains suggested sample activities, but instructors are provided clear learning topics to allow them the freedom to develop their own exercises. Likewise, sample student objectives are suggested but the instructor has the freedom to create specific objectives to match their own exercises and assignments.</p>
                        <div id="spacer" style={{height: '100px'}}></div>
                        <Button style={{marginBottom: '125px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10096466" variant="light">Register for In-Person</Button>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=14132702" variant="light">Register for Live-Virtual</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered" href="/STEAMCoach" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile3">
                    <div>
                        <h3>Computer Science Teaching Certification</h3>
                        <p>Through our Computer Science Certification, we help new and existing teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning.</p>
                        <div id="spacer" style={{height: '90px'}}></div>
                        <Button style={{marginBottom: '125px'}} className="bottom contentCentered"  href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=13072072" variant="light">Register for In-Person</Button>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered"  href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=14132617" variant="light">Register for Live-Virtual</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered"  href="/cstc" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile3" id="drones">
                    <div>
                        <h3 id="dronesHeader">Drones</h3>
                        <p>Our experience shows that students who take introduction to Coding in Middle School increases their likelihood to take Computer Science in high school, which results in students that are more likely to take computer science in college. To prepare students for the future, teachers need access to coursework that will support their success in introducing students to these growing career fields. Our goal is to help schools engage their students in learning to code through fun student centered, project-based learning experiences that integrate technology like Drones. This approach supports the understanding of applied math and real-world problem solving.</p>
                        <div id="spacer" style={{height: '100px'}} ></div>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:STEAM%20Drones%20Professional%20Development%20%28in-person%29" variant="light">Register: In Person</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:STEAM%20Drones%20Professional%20Development%20%28virtual%29" variant="light">Register: Virtual</Button>                    
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile1" id="minecraft:EE">
                    <div>
                        <h3 id="minecraft:EEHeader">Minecraft:Education Edition</h3>
                        <p>Master the basic controls of Minecraft: Education Edition(EE), explore the inventory and build your first house! Travel via rail to experience a different mode of transport offered within this platform, investigate differing lesson ideas to show how MEE can be used in all curriculums / subjects in countless ways. By the end of the session, teachers should feel confident in using MEE and should have generated a plethora of ideas of how to use this amazing platform within their pedagogy.</p>
                        <div id="spacer" ></div>
                        <Button style={{marginBottom: '25px'}}className="bottom contentCentered"  href="mailto:sales@neublaacademyny.com" variant="light">Get More Info</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile2" id="microsoftMIE">
                    <div>
                        <h3 id="microsoftMIEHeader">Microsoft MIE</h3>
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
