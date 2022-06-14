import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Partners.css"
const Partners = () => {
  return (
    <div>
      <div className="partners_section">
        <Container>
          <div class="partners">
            <div class="kaspi">
              <img
                src="../assets/kaspi-bank.svg"
                class="kaspi_img"
                alt="kaspi"
              />
            </div>
            <div class="google">
              <img
                src="../assets/google-2015.svg"
                class="google_img"
                alt="google"
              />
            </div>
            <div class="yandex">
              <img
                src="../assets/yandex-2.svg"
                class="yandex_img"
                alt="yandex"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Partners;
