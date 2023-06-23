import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableFooter from './InvoiceTableFooter';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 2,
        borderColor: '#000000',
    },
});

const InvoiceItemsTable = ({invoicedata})  => {
   
   return <View style={styles.tableContainer}>
         <InvoiceTableHeader invoicedata={invoicedata} />
         <InvoiceTableRow invoicedata={invoicedata} />
         <InvoiceTableFooter invoicedata={invoicedata} /> 
    </View>;
};

export default InvoiceItemsTable;