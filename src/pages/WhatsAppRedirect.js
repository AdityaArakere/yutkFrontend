import React from "react";

export function handleWhatsAppClick() {
  const phoneNumber = "1234567890";
  const message = "Hello, I would like to contact you!";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}

function WhatsAppButton() {
  return (
    <button onClick={() => handleWhatsAppClick()}>Contact on WhatsApp</button>
  );
}

export default WhatsAppButton;
