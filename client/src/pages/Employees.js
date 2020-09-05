import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MyNavBar from '../components/MyNav';
import MyTable from '../components/MyTable';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  


function Employees() {
    const {register, handleSubmit} = useForm();
    const [apidata, setApidata] = useState({})
    const [mychange, setmyChange] = useState(false)

    const onSubmit = (data) => {
        console.log(data.emp);
            axios.post("https://my.api.mockaroo.com/employee/123.json?key=7a00b460&__method=POST",{
                Emp_id: data.emp
            })
            .then(res => {
                console.log(res.data);
                setApidata(res.data);
                setmyChange(true)
            })
            .catch(err => {
                console.log(err);
            })
    };

    function printDocument() {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      }

    return (
        <Container>
        <Row>
            <Col>
                <MyNavBar/>
            </Col>
        </Row>

{/* search components */}
        <Row>
            <Col></Col>
            <Col md="auto" style={{marginTop:"100px"}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="input" name='emp' placeholder="Search by id" 
                    ref={register({required: true})} />
                </Form.Group>
               <Row>
                   <Col></Col>
                   <Col>
                   <Button variant="primary" type="submit">
                    Search
                </Button>
                   </Col>
                   <Col></Col>
               </Row>
                </Form>
            </Col>
            <Col></Col>
        </Row>

{/* table component */}
    {mychange ? 
        <div>
             <Row>
                <Col></Col>
                <Col md='auto' style={{marginTop:"70px"}}>
                <div>
                <button onClick={() => printDocument()}>Generate pdf</button>
                </div>
                <br/>
                <div  id="pdfdiv" className="txt">
                <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Emp_Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                    <td>{apidata.Emp_id}</td>
                    <td><img src={apidata.Image} width="100" height="100"/></td>
                    <td>{apidata.Name}</td>
                    <td>{apidata.Age}</td>
                    <td>{apidata.Email}</td>
                    <td>{apidata.Address}</td>
                  </tr>
              </tbody>
            </Table>
                </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
        :
        <div>
            <Row>
                <Col></Col>
                <Col md='auto' style={{marginTop:"70px"}}>
                <MyTable/>
                </Col>
                <Col></Col>
            </Row>

        </div>
    }
    </Container>

    )
}

export default Employees
