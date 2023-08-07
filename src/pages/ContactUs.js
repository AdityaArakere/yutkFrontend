import React, { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-us h4 text-center mb-4">
      Contact us: No.2469, 24th Cross Rd, opposite to BDA Shopping Complex,
      Siddanna Layout, Banashankari Stage II, Banashankari, Bengaluru, Karnataka
      560070
    </div>
  );
}

export default ContactUs;
