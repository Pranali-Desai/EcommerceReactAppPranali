import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    comapnyName:{
        color: '#3778C2',
        marginTop: 10,
        letterSpacing: 4,
        fontSize: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const InvoiceTitle = ({ title }) => (

    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
        <Text style={styles.comapnyName}>{title} SAII TRADERS
        3067,Police Patil mala,Kameri
        TAL-WALWA, DIST-SANGLI, KAMERI - 415403 MAHARASHTRA
        GSTIN No 27DDNPP6612N1ZT</Text>
    </View>
);

export default InvoiceTitle;