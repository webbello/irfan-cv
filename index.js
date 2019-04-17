import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

// Default export is a4 paper, portrait, using milimeters for units
window.html2canvas = html2canvas;
var doc = new jsPDF("p", "pt", "a4");

var button = document.getElementById("cmd");
button.onclick =  function() {
  //alert("You clicked the button");
  doc.html(document.getElementById('content-pdf'), {
     callback: function (pdf) {
       pdf.save('sample-file.pdf');
     }
  });
}
