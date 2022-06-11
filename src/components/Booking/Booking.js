import React, { useEffect, useState, useParams } from 'react';
import { DatePicker, Space, Button, message } from 'antd';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import OrderService from '../../services/OrderService';
import AuthService from '../../services/auth.service';
import moment from 'moment';
import { BookingModal } from './BookingModal';

const { RangePicker } = DatePicker;

const Booking = () => {
  const location = useLocation();
  const [currentProduct, setCurrentProduct] = useState();
  const [totalCount, setTotalCount] = useState();
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(() => {
    setCurrentProduct(location.state.product);
    setTotalCount(location.state.product.price);
  }, [location.state.product]);

  const [date, setDate] = useState([]);
  const [counter, setCounter] = useState(1);
  const [modalProps, setModalProps] = useState({
    visible: false,
    actionType: null,
    bookingInfo: null,
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
    debugger;
    if (!!date && date.length > 0) {
      const count = moment(date[1]).diff(moment(date[0]), 'days');
      if (count >= 3) {
        setTotalCount(
          (counter + 1) * currentProduct.price - (counter + 1) * currentProduct.price * 0.1,
        ); //eslint-disable-line
      } else {
        setTotalCount((counter + 1) * currentProduct.price);
      }
    } else {
      setTotalCount((counter + 1) * currentProduct.price);
    }
  };

  const toOrder = () => {
    setModalProps({
      visible: !modalProps.visible,
      actionType: 'edit',
      bookingInfo: {
        productName: currentProduct.name,
        username: currentUser.username,
        totalPrice: totalCount,
        startDate: date[0],
        endDate: date[1],
      }
    });
   
      
  };
  const handleDecrement = () => {
    debugger;
    setCounter(counter - 1);
    if (!!date && date.length > 0) {
      const count = moment(date[1]).diff(moment(date[0]), 'days');
      if (count >= 3) {
        if (counter > 0) {
          setTotalCount(
            (counter - 1) * currentProduct.price - (counter - 1) * currentProduct.price * 0.1,
          ); //eslint-disable-line
        } else {
          setTotalCount(0);
        }
      } else {
        setTotalCount((counter - 1) * currentProduct.price);
      }
    } else {
      if (counter > 0) {
        setTotalCount((counter - 1) * currentProduct.price);
      } else {
        setTotalCount(0);
      }
    }
  };
  const onChange = (date, dateString) => {
    setDate(dateString);
    if (!!dateString && dateString.length > 0) {
      const count = moment(dateString[1]).diff(moment(dateString[0]), 'days');
      if (count >= 3) {
        setTotalCount(counter * currentProduct.price - counter * currentProduct.price * 0.1); //eslint-disable-line
      } else {
        setTotalCount(counter * currentProduct.price);
      }
    } else {
      setTotalCount(counter * currentProduct.price);
    }
  };
  const closeModal = () => {
    setModalProps({ visible: false });
  };

  console.log(currentProduct);
  return (
    <React.Fragment>
      <Layout>
        <Layout>
          
          {currentProduct && (
            <div>
      <BookingModal modalProps={modalProps} closeModal={closeModal} />

              <section className="section mt-5">
                <div className="container">
                  <div className="row" id="shadow">
                    <div className="col-md-6">
                      <div>
                        <img
                          alt="Web Studio"
                          className="img-fluid"
                          id="cardImage"
                          src={currentProduct.image}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 ml-auto d-flex ">
                      <div>
                        {moment(date[1]).diff(moment(date[0]), 'days') >= 3 && (
                          <h3>При аренде больше 3 дней, действует скидка в размере 10%</h3>
                        )}
                        <h3>Выберите период аренды</h3>
                        <div className="datePicker">
                          <Space direction="vertical" size={12}>
                            <RangePicker
                              placeholder={['Дата начала аренды', 'Дата конца аренды']}
                              onChange={onChange}
                            />
                          </Space>
                        </div>
                        <div>
                          <div className="price_tech mt-4">
                            <span className="name">Стоимость техники: </span>
                            <span className="value">{currentProduct.productPrice}</span>
                          </div>
                        </div>
                        <div>
                          <div className="price_tech mt-5">
                            <span className="name">Цена в сутки:</span>
                            <span className="value">{currentProduct.price}</span>
                          </div>
                        </div>
                        <div>
                          <div className="price_tech mt-3">
                            <span className="name">Итоговая сумма:</span>
                            <span className="value">{totalCount}</span>
                          </div>
                        </div>
                        <div>
                          <div className="price_tech mt-3">
                            <div>
                              <Button onClick={handleIncrement}>+</Button>
                              {counter > 0 && <Button disabled>{counter}</Button>}
                              {counter > 0 && <Button onClick={handleDecrement}>-</Button>}
                            </div>
                            <span className="value">
                              <button
                                onClick={toOrder}
                                type="button"
                                style={{ marginTop: '40px' }}
                                className="btn btn-primary">
                                Арендовать
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Booking;
