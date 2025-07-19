// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const donateButton = document.getElementById('donateButton');

  if (donateButton) {
    donateButton.addEventListener('click', function () {
      alert('Thank you for your willingness to support voiceless souls! 🙏');
      // You can redirect to a donation page if needed
      // window.location.href = "https://your-donation-link.com";
    });
  }
});
