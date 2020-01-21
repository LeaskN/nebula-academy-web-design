import React, { Component }from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './StaffContent.css';
import LaurieCareyImage from "../../assets/LaurieNebulaAcademy.jpg"
import NicLeaskImage from "../../assets/NicLeaskPHOTO.jpg"
import MichaelCareyImage from "../../assets/MCNebulaAcademy.jpg"
import FrancineMaioneImage from "../../assets/FTMNebulaAcademy.jpg"
import JuleneReedImage from "../../assets/DrJuleneReedNebulaAcademy.jpg"
import TomLemonsImage from "../../assets/TomLemonsImage.jpg"

class StaffContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewWidth:0,
            colWidth: 294,
            name:"",
            allPeople: [ 
                { name: 'Laurie Carey', refName:'LaurieCarey', position:'CEO & Education Management Consultant', linkText: `Book Laurie's Time`, url:'https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Request%20appointment%20for%20services%20with%20Laurie%20Carey%20', image: LaurieCareyImage, bio:'Laurie Carey is a new American educator – challenging the problems of American education with a multi-prong vision that brings the tools of business success, innovative educational practices, and strategic technology to schools, districts, universities, teachers, students and parents. Laurie Carey is not the proprietor of another educational product or service.  The entities that she has founded, Nebula Academy, Laurie Carey Consulting, LLC and We Connect The Dots, Inc., are driven by ideas, passions, individual skills, partnerships and the efficacy of research. Both entities utilize mutually supporting designs to bring American education to a new level of effectiveness and leadership by replacing stagnation and irrelevance with passionate motivational learning and teaching.'}, 
                { name: 'Nic Leask', refName:'NicLeask', position:'STEAM Coach & Software Engineer', linkText: `Nic's LinkedIn`, url:'https://www.linkedin.com/in/nicholas-leask/', image: NicLeaskImage, bio: 'Nic is a STEAM Coach & Software Engineer. He is a Microsoft Innovative Educator (MIE) Certified Instructor and Microsoft: Education Educator (MEE) Certified Instructor.  He attended the Minecraft: Education Edition training at the Microsoft Corporate Office in Redmond, Washington. He graduated from Stony Brook University where he attained a degree in both Environmental Studies(BA) and Business Management(BS). Post-graduation Nic worked for an environmental marketing agency and later worked at a technology recruitment firm. The latter is where Nic found his opportunity to move into technology. He attended a software engineering bootcamp in NYC where he gained experience working primarily with React, JavaScript, Node.js, HTML, & CSS. Nic has helped shape Nebula Academy, taught the importance of bringing tech into the classroom and how to utilize technology as a resource tool to engage students in immersive learning experiences.'},
                { name: 'Michael Carey', refName:'MichaelCarey', position:'STEAM Coach & AWS Software Architect', linkText: `Michael's LinkedIn`, url:'https://www.linkedin.com/in/michael-carey-6a162b7/', image: MichaelCareyImage, bio: 'As CEO of IT Systems Group, Mr. Carey was very early to market during the proliferation of the file server and the explosion of networking in the corporate and government environments. As Long Island’s first Certified Novell Engineer, he quickly built a successful company centered around sales and support of new and emerging, game-changing technologies. With an intense passion and a deep understanding of how technology helps businesses reach their goals, Mr. Carey built the platforms from which his sales and operation staff succeeded. Through instruction and coaching, he empowers his people to be creators of their own processes and their own successes. Besides building sales and operational teams, Mr. Carey used his programming skills to develop customized business reporting systems for the purposes of supplying his teams with highly relevant, actionable, real-time management information. Most recently, Mr. Carey’s builds mobile and web solutions for business leveraging today’s cloud platforms including Amazon Web Services and Microsoft Azure. Mr. Carey holds a Master of Science in Electrical Engineering and a Bachelor of Engineering with a double major in Electrical Engineering and Computer Science from the State University of New York at Stony Brook.'},
                { name: 'Francine Maione', refName:'FrancineMaione', position:'Instructional Technology Consultant', linkText: `Francine's LinkedIn`, url:'https://www.linkedin.com/in/francine-touliatos-maione-16924813b/', image: FrancineMaioneImage, bio: 'Francine Maione is an Instructional Technology Consultant currently specializing in integrating STEM Equipment into Pre-K, Primary, Middle and Secondary Classrooms.  She graduated from New York University with a degree in Educational Theatre. Francine entered the field of Technology as a Teacher Assistant/Computer Specialist in a K-6 Elementary School in Manhasset, NY. Her experiences working with both students and teachers in a Computer Lab has fueled her passion to assist todays Educators in gaining the skills necessary to encourage creativity & innovation in a STEM setting. She is a Microsoft Innovative Educator (MIE) and enjoys volunteering for We Connect The Dots, Inc.'},
                { name: 'Dr. Julene Reed', refName:'DrJuleneReed', position:'Professional Development Consultant', linkText: `Julene's LinkedIn`, url:'https://www.linkedin.com/in/julenereed/', image: JuleneReedImage, bio: 'Julene is a professional development consultant, researcher, and educator with over twenty–five years of experience in education. Julene holds a doctorate in education leadership with a focus on global education. She is an Apple Distinguished Educator, Apple Teacher, Google for Education Certified Trainer and Innovator, Google Earth Education Expert, Microsoft Innovative Educator and Trainer, education author, and international consultant and presenter.'}, 
                { name: 'Tom Lemons', refName:'TomLemons', position:'Business Development', linkText: `Tom's Linkedin`, url:'https://www.linkedin.com/in/thomas-lemons-206196a2/', image: TomLemonsImage, bio: 'Tom is a graduate of Rollins College with a bachelor in business and social entrepreneurship. Tom is a catalyst to our growth in the North East of the US. Tom comes from a family of educators across Massachusetts. He is following in their footsteps by modernizing what a current higher education looks like.'}, 
            ],            
        };
        this.clickedEle = this.clickedEle.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ viewWidth: window.innerWidth });
    }
    objectToString(bio){
        let string = JSON.stringify(bio);
        return string;
    }
    showBio(name){
        for (let i = 0; i < this.state.allPeople.length; i++) {
            let person = this.state.allPeople[i];
            if (person.refName === name){
                return <Col sm={12} className={this.state.name !== person.refName ? "hidden" : "showing"}><br/>{(person.bio)}</Col>
            }
        }
    }
    clickedEle(event){
        let target = event.target;
        if (target.parentElement.className === 'col'){
            let person = target.parentElement.childNodes[2].innerHTML.split(' ').join('').split('.').join('');
            if (this.state.name === person){
                this.setState({
                    name: ''
                })
            } else {
                this.setState({
                    name: person
                })
            }
        } else if (target.parentElement.parentElement.className === 'col'){
            let person = target.parentElement.parentElement.childNodes[2].innerHTML.split(' ').join('').split('.').join('');
            if (this.state.name === person){
                this.setState({
                    name: ''
                })
            } else {
                this.setState({
                    name: person
                })
            }
        } 
    }

    render() {
        return (
            <Container>
                {/* <Row>{this.state.allPeople.map(person =>
                    <Col sm={12} className={this.state.name !== person.refName ? "hidden" : "showing "}><br/>{this.showBio(this.state.name)}</Col>
                )}</Row> */}
                <Row>{this.state.allPeople.map(person =>
                    <React.Fragment>
                        <Col onClick={(e) => this.clickedEle(e)}>
                            <div className="imageContainer pointer" >
                                <Image src={person.image} fluid />
                            </div>
                            <br/>
                            <h2 className="centralText pointer">{person.name}</h2>
                            <h4 className="greyText centralText pointer">{person.position}</h4>
                            <a className="link centralText" href={person.url} target="empty">{person.linkText}</a>
                            <hr/>
                        </Col> 
                    </React.Fragment>
                )}</Row>
                
            </Container>      
        )
    }
}
export default StaffContent;
