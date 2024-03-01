window.addEventListener("beforeunload", function (event) {
  // Uyarı mesajı
  var confirmationMessage = "Want to reserve more planets?";

  // Modern tarayıcılarda uyarı mesajını görüntüleme
  event.returnValue = confirmationMessage;
  return confirmationMessage;
});
