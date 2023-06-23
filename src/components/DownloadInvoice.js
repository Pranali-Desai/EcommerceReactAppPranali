import 'jspdf-autotable'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Invoice';
import './DownloadInvoice.css';
import { Button } from "./Button";

const DownloadInvoice= ({productdata}) => {

  console.log(productdata.products.name);

  const fileName = "Invoice.pdf";

  return (
    <div>
      <div className="download-invoice">
            <PDFViewer width={800} height={500} showToolbar={false}>
            <PdfDocument invoicedata={productdata.products} />
            </PDFViewer>
            <div></div>
            <div className='download-link'>
            <Button>
                <PDFDownloadLink
                    document={<PdfDocument invoicedata={productdata.products}/>}
                    fileName={fileName}
                >
                    {({ blob, url, loading, error }) =>
                    loading ? "Loading..." : "Download Invoice here"
                    }
                </PDFDownloadLink>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default DownloadInvoice
