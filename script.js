function generateQR() {
  const input = document.getElementById("inputText").value;
  const qrImage = document.getElementById("qrImage");

  if (!input.trim()) {
    alert("Please enter some text or a URL");
    return;
  }

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    input
  )}&size=200x200`;

  qrImage.src = qrURL;
}
