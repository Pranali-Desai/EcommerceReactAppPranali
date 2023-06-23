import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        display:'flex',
        borderBottomColor: '#000000',
        color: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        flexGrow: 1,   
    },
    description: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'Left',
        fontStyle: 'bold',
        paddingLeft: 8,
        fontSize: 12,
        height:24,
        textTransform: 'uppercase',
        paddingTop: 5,
    },
    qty: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'Left',
        fontStyle: 'bold',
        paddingLeft: 8,
        fontSize: 12,
        height: 24,
        paddingTop: 5,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'Left',
        fontStyle: 'bold',
        paddingLeft: 8,
        fontSize: 12,
        height:24,
        paddingTop: 5,
    },
    amount: {
        width: '25%',
        textAlign: 'Left',
        fontStyle: 'bold',
        paddingLeft: 8,
        fontSize: 12,
        height:24,
        paddingTop: 5,
    }, 
    reportTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12, 
    }, 
    comapnyName: {
        width: '100%',
        textAlign: 'center',
        fontStyle: 'bold',
        fontSize: 18,
    }, 
    comapnyAddress: {
        width: '100%',
        textAlign: 'center',
        fontSize: 11,
        marginBottom: 1
    }, 
    gstDetails:
    {
        width: '100%',
        textAlign: 'Left',
        fontSize: 11,
        marginBottom: 1,
        paddingLeft: 8,
        textTransform: 'uppercase',
    }
});

const InvoiceTableHeader = ({invoicedata})  => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
            <View style={styles.container}>
                <Text style={styles.reportTitle}>TAX INVOICE</Text>              
            </View>
            <View style={styles.comapnyName}>
                <Text style={styles.comapnyName}>SAII TRADERS</Text>              
            </View>
            <View style={styles.comapnyAddress}>
                <Text style={styles.comapnyAddress}>3067, Police Patil mala, Kameri</Text>              
            </View>
            <View style={styles.comapnyAddress}>
                <Text style={styles.comapnyAddress}>TAL-WALWA, DIST-SANGLI, KAMERI - 415403 MAHARASHTRA</Text>              
            </View>
            <View style={styles.container}>
                <Text style={styles.comapnyAddress}>GSTIN No 27DDNPP6612N1ZT</Text>
            </View>
          
            <View style={styles.container}>
                <Text style={styles.description}>Bill To</Text>
                <Text style={styles.qty}>Place Of Supply</Text>
                <Text style={styles.rate}>Invoice No.</Text>
                <Text style={styles.amount}>Dated</Text>
            </View>          
            <View style={styles.container}>
                <Text style={styles.description}>{invoicedata.name}</Text>
                <Text style={styles.qty}>{invoicedata.address}</Text>
                <Text style={styles.rate}>{invoicedata.invoiceNo}</Text>
                <Text style={styles.amount}>{invoicedata.billDate == 'Invalid Date' ? date : invoicedata.billDate}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.gstDetails}>GST No : {invoicedata.gstNo}</Text>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.description}>Product</Text>
                <Text style={styles.qty}>QTY</Text>
                <Text style={styles.rate}>Rate</Text>
                <Text style={styles.amount}>Amount</Text>
            </View>
        </div>      
    )
};

export default InvoiceTableHeader;