import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 24,
      fontStyle: 'bold',
    },
    bottomRow: {
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 24,
      fontStyle: 'bold',
    },
    contactRow: {
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      flexDirection: 'row',
      display: 'block',
      alignItems: 'center',
      height: 140,
      fontStyle: 'bold',
    },
    
    description: {
      width: '40%',
      textAlign: 'Left',
      display: 'block',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      paddingLeft: 8,
      height : 24,
      paddingTop: 1,
    },
    qty: {
      width: '20%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'Left',
      fontStyle: 'bold',
      paddingLeft: 8,
      height : 24,
      paddingTop: 1,
    },
    rate: {
      width: '15%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'Left',
      fontStyle: 'bold',
      paddingLeft: 8,
      height : 24,
      paddingTop: 1,
    },
    amount: {
      width: '25%',
      textAlign: 'right',
      fontStyle: 'bold',
      paddingRight: 8,
      height : 24,
      paddingTop: 1,
    },  


    descriptionBottom: {
      width: '40%',
      textAlign: 'Left',
      display: 'block',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      paddingLeft: 8,
      height : 140,
      paddingTop: 5,
    },
    qtyBottom: {
      width: '20%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'Left',
      fontStyle: 'bold',
      paddingLeft: 8,
      height : 140,
      paddingTop: 5,
    },
    rateBottom: {
      width: '15%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'Left',
      fontStyle: 'bold',
      paddingLeft: 8,
      height : 140,
      paddingTop: 5,
    },
    amountBottom: {
      width: '25%',
      textAlign: 'right',
      fontStyle: 'bold',
      paddingRight: 25,
      height : 140,
      paddingTop: 45,
    },  
    
});

const InvoiceTableFooter = ({invoicedata})  => {
    const total = invoicedata.grossTotal;
       console.log(invoicedata)
    return <>
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}></Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}></Text>
        </View> 
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}></Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}></Text>
        </View>
        
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}>{Number.parseFloat(total).toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL GROSS</Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}>{Number.parseFloat(total).toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.description}>CGST {invoicedata.CGST} %</Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}>{invoicedata.cgstAmount}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}>SGST {invoicedata.SGST} %</Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}>{invoicedata.sgstAmount}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}>Total</Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}>{Number.parseFloat(invoicedata.total).toFixed(2)}</Text>
        </View>      

        <View style={styles.bottomRow}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}></Text>
        </View>   

        <View style={styles.contactRow}>
            <Text style={styles.descriptionBottom}>
              Note - Please make cheques in favor of.
              Saii Traders
              OUR BANK AC DETAILS
              HDFC BANK
              CURRENT A/C NO- 50200069431996
              A/C NAME-SAII TRADERS
              IFSC CODE-HDFC0002455
              BRANCH-ISLAMPUR.
            </Text>
            <Text style={styles.qtyBottom}> </Text>
            <Text style={styles.rateBottom}> </Text>
            <Text style={styles.amountBottom}>SAII TRADERS</Text>
        </View>   
        
      </>
};

export default InvoiceTableFooter;