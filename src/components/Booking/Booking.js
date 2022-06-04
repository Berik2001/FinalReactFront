import React, { useEffect, useState } from 'react';
import { DatePicker, Space, Button, Image } from 'antd';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
const { RangePicker } = DatePicker;

const { Header, Footer, Sider, Content } = Layout;

const Booking = () => {
  const location = useLocation();
  const [currentProduct, setCurrentProduct] = useState();
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    setCurrentProduct(location.state.product);
    setTotalCount(location.state.product.price);
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
    setTotalCount((counter + 1) * currentProduct.price);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <React.Fragment>
      <Layout>
        <Layout>
          {currentProduct && (
            <div>
              <section className="section mt-5">
                <div className="container">
                  <div className="row" id="shadow">
                    <div className="col-md-6">
                      <div>
                        <img
                          alt="Web Studio"
                          className="img-fluid"
                          id="cardImage"
                          src="https://www.tradeinn.com/f/13735/137354168/apple-iphone-11-pro-64gb-5.8.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 ml-auto d-flex ">
                      <div>
                        <h3>Выберите период аренды</h3>
                        <div className="datePicker">
                          <Space direction="vertical" size={12}>
                            <RangePicker />
                          </Space>
                        </div>
                        <div>
                          <div className="price_tech mt-4">
                            <span className="name">Стоимость техники:</span>
                            <span className="value">120 000 KZT</span>
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
                              <button type="button" className="btn btn-primary">
                                Арендоввать
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
