import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceItemsTable from "./InvoiceItemsTable";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({invoicedata})  => {

    console.log(invoicedata);

    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <InvoiceItemsTable invoicedata={invoicedata} />
                <InvoiceThankYouMsg />
            </Page>
        </Document>
    )
};

export default PdfDocument;