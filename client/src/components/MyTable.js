import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  

function MyTable() {
    const [apiData, setApiData] = useState([]);
    const [Loading, setLoading] = useState(true)
   
    useEffect(() => {
        axios.get('https://my.api.mockaroo.com/employee.json?key=7a00b460')
        .then(function (response) {
          // handle success
          console.log(response);
          setApiData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])

    //
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
        <div >
          {Loading ?
          <div> <h4>Loading...</h4></div>
        :
        <div>
          <div>
          <button onClick={() => printDocument()}>Generate pdf</button>
          </div>
           <br/>

            <div id="pdfdiv" className="txt">
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
              {
                apiData.map(res => {
                  return(
                    <tr>
                    <td>{res.Emp_id}</td>
                    <td><img src={res.Image} width="100" height="100"/></td>
                    <td>{res.Name}</td>
                    <td>{res.Age}</td>
                    <td>{res.Email}</td>
                    <td>{res.Address}</td>
                  </tr>
                  )
                })
              }
              </tbody>
            </Table>
            </div>
        </div>
        }
        </div>
    )
}

export default MyTable
