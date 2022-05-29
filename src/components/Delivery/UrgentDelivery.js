import React from 'react';
import { Container } from "react-bootstrap";
import "../../styles/Guarantee.css";
const UrgentDelivery = () => {
    return (
        <div>
            <Container>
            <div class="title">Срочная доставка день в день</div>
        <div class="delivery-variants">
          <div class="item">
            <svg
              width="80"
              height="81"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40"
                cy="40.2227"
                r="40"
                fill="#3C5CCF"
                fill-opacity="0.1"
              ></circle>
              <path
                opacity="0.3"
                d="M40 38.1492C35.4181 38.1492 31.7037 34.4349 31.7037 29.8529C31.7037 25.271 35.4181 21.5566 40 21.5566C44.5819 21.5566 48.2963 25.271 48.2963 29.8529C48.2963 34.4349 44.5819 38.1492 40 38.1492Z"
                fill="#3C5CCF"
              ></path>
              <path
                d="M21.3346 57.2286C22.1385 47.3296 30.1728 42.2969 39.9654 42.2969C49.8958 42.2969 58.0545 47.0531 58.6623 57.2302C58.6865 57.6356 58.6623 58.8895 57.1042 58.8895C49.4185 58.8895 37.9979 58.8895 22.8421 58.8895C22.322 58.8895 21.2908 57.7678 21.3346 57.2286Z"
                fill="#3C5CCF"
              ></path>
            </svg>
            <div class="left">
              <div class="name">Мелкогабаритная доставка</div>
              <div class="description">Помещается в рюкзак</div>
              <div class="right">2800KZT</div>
            </div>
          </div>
          <div class="item">
            <svg
              width="80"
              height="81"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40.0001"
                cy="40.2207"
                r="40"
                fill="#3C5CCF"
                fill-opacity="0.1"
              ></circle>
              <path
                d="M43.0577 45.2284H17.4861C17.2443 45.2284 17.0594 45.0435 17.0594 44.8018V25.872C17.0594 25.6302 17.2443 25.4453 17.4861 25.4453H43.0577C43.2995 25.4453 43.4843 25.6302 43.4843 25.872V44.8018C43.4843 45.0435 43.2852 45.2284 43.0577 45.2284Z"
                fill="#3C5CCF"
              ></path>
              <path
                d="M23.09 54.9973C24.8965 54.9973 26.3611 53.5328 26.3611 51.7262C26.3611 49.9196 24.8965 48.4551 23.09 48.4551C21.2834 48.4551 19.8188 49.9196 19.8188 51.7262C19.8188 53.5328 21.2834 54.9973 23.09 54.9973Z"
                fill="#B8C4EE"
              ></path>
              <path
                d="M55.9288 40.0798L53.1981 32.5989C53.1412 32.4282 52.9705 32.3145 52.7999 32.3145H44.935C44.6932 32.3145 44.5083 32.4993 44.5083 32.7411V45.8113C44.5083 46.0531 44.3234 46.238 44.0817 46.238H16.7323C16.4906 46.238 16.3057 46.4229 16.3057 46.6647V51.2442C16.3057 51.486 16.4906 51.6709 16.7323 51.6709H18.4248C18.6381 51.6709 18.823 51.5002 18.8372 51.2869C19.0506 49.1393 20.871 47.4469 23.0754 47.4469C25.2799 47.4469 27.1003 49.1251 27.3137 51.2869C27.3421 51.5002 27.5128 51.6709 27.7261 51.6709H52.2168C52.4301 51.6709 52.615 51.5002 52.6292 51.2869C52.8283 49.1109 54.6488 47.4042 56.8816 47.4042C59.1145 47.4042 60.935 49.1109 61.1341 51.2869C61.1483 51.5002 61.3332 51.6709 61.5465 51.6709H63.239C63.4808 51.6709 63.6656 51.486 63.6656 51.2442V43.9909C63.6656 43.8202 63.5661 43.6638 63.4096 43.6069L56.1279 40.3358C56.0425 40.2789 55.9572 40.1936 55.9288 40.0798Z"
                fill="#B8C4EE"
              ></path>
              <path
                d="M56.91 54.9407C58.7166 54.9407 60.1811 53.4761 60.1811 51.6696C60.1811 49.863 58.7166 48.3984 56.91 48.3984C55.1034 48.3984 53.6389 49.863 53.6389 51.6696C53.6389 53.4761 55.1034 54.9407 56.91 54.9407Z"
                fill="#B8C4EE"
              ></path>
            </svg>

            <div class="left">
              <div class="name">Крупногабаритная доставка</div>
              <div class="description">Требуется транспорт</div>
              <div class="right">4000KZT</div>
            </div>
          </div>
        </div>
            </Container>
        </div>
    );
};

export default UrgentDelivery;