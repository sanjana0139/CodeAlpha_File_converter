const fileInput = document.querySelector('.myFile');
const selectInput = document.querySelector('select[name="file"]');
const convertButton = document.querySelector('.convert');
const downloadButton = document.querySelector('.download-button');
const resultElement = document.querySelector('.result');

let selectedFile = null;
let selectedFileType = null;

fileInput.addEventListener('change', function(event) {
  selectedFile = event.target.files[0];
});

selectInput.addEventListener('change', function(event) {
  selectedFileType = event.target.value;
});

convertButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (!selectedFile || !selectedFileType || selectedFileType === 'select') {
    alert('Please select a file and conversion type.');
    return;
  }
  convertFile(selectedFile, selectedFileType);
});

downloadButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (!resultElement.textContent) {
    alert('No converted file available to download.');
    return;
  }
  downloadConvertedFile(resultElement.textContent);
});

function convertFile(file, fileType) {
  resultElement.textContent = `Converted ${file.name} to ${fileType}`;
}

function downloadConvertedFile(content) {
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  downloadLink.download = 'converted_file.txt';
  downloadLink.click();
}

