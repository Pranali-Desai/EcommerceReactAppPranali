import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import DownloadInvoice from './DownloadInvoice';

const Wrapper = styled.section`
  padding: 7rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 1rem;
  }
  
  div {
    margin-bottom: 35px;
  }

  label {
    display: inline-block;
    width: 130px;
    font-size: 1.7rem;   
  }
 
`

const Bill = () => {
  
  const [products, setProducts] = useState(
      {name:'', address: '', gstNo:'', invoiceNo:'', billDate: new Date(''), title: 'JK Cement', quantity: 0, rate: 0, CGST : 14, SGST: 14, grossTotal: 0, total: 0, cgstAmount: 0, sgstAmount: 0}
  );

  const calculateTotal = () => {
    const grossTotalAmt = products.quantity * products.rate;
    const cgstAmt = grossTotalAmt * products.CGST/100;
    const sgstAmt = grossTotalAmt * products.CGST/100;
    const totalGst = cgstAmt + sgstAmt;
    const totalAmt = grossTotalAmt + totalGst;
    setProducts({...products, grossTotal: grossTotalAmt, total:totalAmt, cgstAmount:cgstAmt, sgstAmount:sgstAmt});
    //console.log(products.total);
    return true;
  
  };

  return (
    <Wrapper>
      <h2> Create Bill</h2>   
      <div></div>
      <div className="container">   
        <div>
          <label>GST No : </label>
          <input type="text" placeholder="enter GST No." value={products.gstNo} onChange={(e)=>setProducts({...products,gstNo:e.target.value})} />       
          
          <label>Invoice No : </label>
          <input type="text" placeholder="enter Invoice No." value={products.invoiceNo} onChange={(e)=>setProducts({...products,invoiceNo:e.target.value})} />
        
          <label>Bill Date : </label>
          <input style={{"width" : "18%"}} type="date" placeholder="enter billDate." value={products.billDate} onChange={(e)=>setProducts({...products,billDate:e.target.value})} />
        </div>
        <div>
          <label>Bill to Name : </label>
          <input type="text" placeholder="enter name" value={products.name} onChange={(e)=>setProducts({...products,name:e.target.value})} />       
          
          <label>Address : </label>
          <input type="text" placeholder="enter address" value={products.address} onChange={(e)=>setProducts({...products,address:e.target.value})} />
        
          <label>Product Title: </label>
          <input type="text" placeholder="enter title" value={products.title} onChange={(e)=>setProducts({...products,title:e.target.value})} />                   
        </div>

        <div>           
          <label>Rate: </label>
          <input type="text" placeholder="enter rate" value={products.rate} onChange={(e)=>setProducts({...products,rate:e.target.value})} />
      
          <label>Quantity : </label>
          <input type="text" placeholder="enter quantity" value={products.quantity} onChange={(e)=>setProducts({...products,quantity:e.target.value})} />
        
          <label>Total Gross : </label>
          <input type="text" placeholder="enter total gross" disabled value={products.grossTotal} onChange={(e)=>setProducts({...products,grossTotal:e.target.value})} />          
        </div>

        <div>        
          <label>CGST : </label>
          <input type="text" placeholder="enter CGST" disabled value={'14 %'} onChange={(e)=>setProducts({...products,CGST:e.target.value})} />
        
          <label>SGST : </label>
          <input type="text" placeholder="enter SGST" disabled value={'14 %'} onChange={(e)=>setProducts({...products,SGST:e.target.value})} />
        
          <label>Total : </label>
          <input type="text" placeholder="enter total" disabled value={products.total} onChange={(e)=>setProducts({...products,total:e.target.value})} />
        </div>

        <div>
          <NavLink to="/Bill" className="navbar-link Product-link" onClick={calculateTotal}>
              <Button>Calculate Total</Button>
          </NavLink>
          <div></div>
           <DownloadInvoice productdata={{products}}>
              Download Invoice
          </DownloadInvoice>  
         
        </div>                    
      </div>    
   </Wrapper>
  );
};
export default Bill;
