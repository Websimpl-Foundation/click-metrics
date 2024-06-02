import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';


const QrCodes = ({ url }: { url: string }) => {
    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCode') as HTMLCanvasElement;
        if (canvas) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            canvas.toBlob((blob: any) => {
                saveAs(blob, 'qr_code.png');
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="p-4 bg-white rounded-lg shadow-lg">
                <QRCode id="qrCode" value={url} size={256} className="rounded-md" />
                <button 
                    onClick={downloadQRCode} 
                    className="mt-8 px-4 py-2 ml-10 mr-10  bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Download QR Code
                </button>
            </div>
        </div>
    );
};

export default QrCodes;
