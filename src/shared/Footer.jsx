const Footer = () => {
  return (
    <>
    <footer className="section__container footer__container">
      <div className="footer__col">
        <h4>CONTACT INFO</h4>

        <p>
          <span>
            <i className="ri-map-pin-user-line text-blue-700"></i>
          </span>
          123 Main St, Anytown, USA
        </p>
        <p>
          <span>
            <i className="ri-mail-open-line text-blue-700"></i>
          </span>
          tanvirislam3912@gmail.com
        </p>
        <p>
          <span>
            <i className="ri-phone-line text-blue-700"></i>
          </span>
          01639125012
        </p>
      </div>
      {/*  */}
      <div className="footer__col">
        <h4 className=" uppercase">Company</h4>
        <a href="/">Home</a>
        <a href="/">About us</a>
        <a href="/">Work With us</a>
        <a href="/">Our Blogs</a>
        <a href="/">Trems & Conditions</a>
      </div>

      {/*  */}
      <div className="footer__col">
        <h4 className=" uppercase">useful link</h4>
        <a href="/">Help</a>
        <a href="/">Track your order</a>
        <a href="/">Man</a>
        <a href="/">Women</a>
      </div>

      {/*  */}
      <div className="footer__col">
        <h4 className=" uppercase">instagram</h4>
        <div className="instagram__grid">
          <img src="/instagram-1.jpg" alt="" />
          <img src="/instagram-2.jpg" alt="" />
          <img src="/instagram-3.jpg" alt="" />
          <img src="/instagram-4.jpg" alt="" />
        </div>
      </div>

      
    </footer>
    <div className="">
    <div className="footer__bar">
          Copyright © {new Date().getFullYear()} - All right reserved by Tanvir Isla
      </div>
    </div>
    </>
  );
};

export default Footer;
