function downloadQRCode() {
    // Get the QR code as an image URL
    var qrCodeImageURL = document.getElementById('qrcode').querySelector('img').src;

    // Create a temporary anchor element
    var downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImageURL;
    downloadLink.download = 'qrcode.png';
    
    // Trigger a click event to simulate the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
