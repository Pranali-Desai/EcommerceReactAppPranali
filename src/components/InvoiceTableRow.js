import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        margin: 'auto'
    },
    description: {
        width: '40%',
        textAlign: 'left',
        fontStyle: 'bold',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        borderStyle: 'solid', 
        paddingLeft: 8,
        textTransform: 'uppercase',
        height : 24,
        paddingTop: 5,
    },
    qty: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        borderStyle: 'solid', 
        textAlign: 'right',
        fontStyle: 'bold',
        paddingRight: 8,
        height : 24,
        paddingTop: 5,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        borderStyle: 'solid', 
        textAlign: 'right',
        fontStyle: 'bold',
        paddingRight: 8,
        height : 24,
        paddingTop: 5,
    },
    amount: {
        width: '25%',
        borderStyle: 'solid', 
        textAlign: 'right',
        fontStyle: 'bold',
        paddingRight: 8,
        height : 24,
        paddingTop: 5,
    },
    rowEmpty:{
        marginTop:20
    }
});

const InvoiceTableRow = ({invoicedata})  => {
    console.log(invoicedata.grossTotal)
    const total = invoicedata.grossTotal;
    return (<Fragment>    
        <View style={styles.row} key={invoicedata.name}>
            <Text style={styles.description}>{invoicedata.title}</Text>
            <Text style={styles.qty}>{invoicedata.quantity}</Text>
            <Text style={styles.rate}>{invoicedata.rate}</Text>
            <Text style={styles.amount}>{(invoicedata.grossTotal)}</Text> 
        </View>             
    </Fragment>)
};

export default InvoiceTableRow;