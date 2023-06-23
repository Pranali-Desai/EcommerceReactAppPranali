import React from 'react';
import jsPDF from 'jspdf';
import { Button } from "./Button";

class MyPDF extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={}
    };
    generatePDF = () => {
<<<<<<< HEAD


=======
>>>>>>> bbad8672f748798df749975d65a80bf2266aac24
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first title.')
      doc.addFont('helvetica', 'normal')
      doc.text(20, 60, 'This is the second title.')
      doc.text(20, 100, 'This is the thrid title.')      
      
      doc.save('demo.pdf')
    }   
    
   render() {
<<<<<<< HEAD
      return (      
         <button onClick={this.generatePDF} type="primary"><Button> PDF </Button></button>          
=======
      return (
         <button onClick={this.generatePDF} type="primary"><Button>Download PDF</Button></button>          
>>>>>>> bbad8672f748798df749975d65a80bf2266aac24
      );
   }
}
export default MyPDF;