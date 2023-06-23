import  { React } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    }
});

const InvoiceNumber = ({invoicedata})  => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


   console.log(invoicedata.billDate)
   return <>
         <View style={styles.invoiceNoContainer}>
             <Text style={styles.label}>Invoice No:</Text>
             <Text style={styles.invoiceNo}>{invoicedata.invoiceNo == '' ? '0000000' : invoicedata.invoiceNo}</Text>
         </View >
         <View style={styles.invoiceDateContainer}>
             <Text style={styles.label}>Date: </Text>
             <Text >{invoicedata.billDate == 'Invalid Date' ? date : invoicedata.billDate}</Text>
        </View >
     </>
};

export default InvoiceNumber;