import React from "react";
import "../../styles/Guarantee.css";
const MainGuarantee = () => {
  return (
    <div>
      <div className="container marketing">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Мы стараемся обеспечить каждому клиенту максимально качественный
              сервис
            </h2>
            <p className="lead">
              Именно поэтому, обратившись в нашу компанию, Вы не только возьмете
              в аренду лучшую технику, но и будете приятно удивлены
              профессионализмом нашей команды. Ведь каждый сотрудник проходит
              специальное обучение у руководителя отдела в течение двух месяцев.
              Только после этого менеджер, безупречно подготовленный, начинает
              работу с клиентами.
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
              Проводите время ожидания вашей техники с досугом
            </h2>
            <p className="lead">
              Также Вы можете лично посетить наш офис, где у нас представлены
              выставочные образцы техники. Для гостей мы всегда предложим
              телевизор, чай-кофе и конфеты, а если Вам по какой-либо причине
              придется подождать менеджера или необходимую технику, можно будет
              поиграть в Xbox и вдобавок пообщаться с замечательным собеседником
              - Алисой (голосовой помощник Яндекс.Станции). Для автомобиля у нас
              предусмотрена охраняемая парковка.
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
      </div>
    </div>
  );
};

export default MainGuarantee;
