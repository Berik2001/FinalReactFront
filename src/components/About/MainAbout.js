import React from "react";
import "../../styles/MainAbout.css";
const MainAbout = () => {
  return (
    <div>
      <div className="container marketing">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Что такое 2SEAT.KZ?</h2>
            <p className="lead">
              Это современный и удобный сервис, позволяющий Вам взять в аренду и
              насладиться удовольствием от использования новинок техники и
              крутых гаджетов по цене, несравнимо меньшей, чем стоимость
              покупки.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="../assets/2bikes.jpg"
              alt=""
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              style={{ borderRadius: "10px 10px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              К чему стремится наша компания?
            </h2>
            <p className="lead">
              Мы стремимся сделать процесс аренды максимально понятным и удобным
              для Вас и оказываем всестороннюю поддержку нашим клиентам, начиная
              с момента формирования заказа и заканчивая вопросами эксплуатации
              техники. Нам важно мнение каждого из Вас, поэтому мы тщательно
              подходим к вопросам поддержания уровня нашего сервиса и состояния
              нашего оборудования и заботимся о том, чтобы каждый наш клиент
              всегда получал желаемое.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="../assets/scooter.jpg"
              alt=""
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              style={{ borderRadius: "10px 10px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <hr className="featurette-divider" />
        <div className="row">
          <div className="col-lg-4">
            <img
              src="../assets/Berik.jpg"
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="Berik"
            />

            <h2>Berik Sapargaliyev</h2>
            <p>
              I am a student in IT-technologies, I am in the period of
              developing my skills in software development.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>

          <div className="col-lg-4">
            <img
              src="../assets/Dauka.jpg"
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="Dauka"
            />

            <h2>Dauren Ashim</h2>
            <p>
              Extremely motivated to constantly develop personal skills and grow
              professionally
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>

          <div className="col-lg-4">
            <img
              src="../assets/Zhando.jpg"
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="Zhando"
            />

            <h2>Zhandos Beisov</h2>
            <p>
              Our teamlead and he is good at football.He supports FC Barcelona.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
