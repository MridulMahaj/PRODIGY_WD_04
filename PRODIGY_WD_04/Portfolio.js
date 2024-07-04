document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL of the file you want to download
    const fileUrl = 'PRODIGY_WD_04/testresume.pdf'; // Replace with the actual file path or URL
    const fileName = 'testresume.pdf'; // Replace with the desired file name

    // Create an anchor element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    
    // Append the anchor to the body
    document.body.appendChild(a);
    
    // Trigger the download
    a.click();
    
    // Remove the anchor from the document
    document.body.removeChild(a);
});
