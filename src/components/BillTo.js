import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 10,
        paddingBottom: 2,
    },
});

const BillTo = ({invoicedata})  => {
    console.log(invoicedata)
   return  <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To: {invoicedata.name} </Text>
        <Text style={styles.billTo}>GST No: {invoicedata.gstNo} </Text>
        </View>
};

export default BillTo;