export default function IgdanWa() {
  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=%2B6287776474959&text=Halo Kak saya boleh minta Price Listnya ?"
          className="whatsapp_float"
          target="_blank"
        >
          <i
            className="fa fa-whatsapp"
            style={{ fontSize: "48px", color: "white" }}
            title="Whatsapp"
          ></i>
        </a>
        <a
          href="https://www.instagram.com/rinsmakeup/"
          className=" instagram_icon"
          target="_blank"
          style={{ zIndex: "15" }}
        >
          <i
            className="fa fa-instagram"
            title="@rinsmakeup"
            style={{ fontSize: "52px", color: "white", zIndex: "2" }}
          ></i>
        </a>
      </div>
    </>
  );
}
