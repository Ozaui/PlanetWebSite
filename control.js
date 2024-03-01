window.addEventListener("beforeunload", function (event) {
  // Uyarı mesajı
  var confirmationMessage = "Sayfadan ayrılmak istediğinizden emin misiniz?";

  // Modern tarayıcılarda uyarı mesajını görüntüleme
  event.returnValue = confirmationMessage;
  return confirmationMessage;
});
