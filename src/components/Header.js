import React, { useState, useEffect, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CategoryService from '../services/CategoryService';
import AuthService from '../services/auth.service';
import { Select } from 'antd';

import { useNavigate } from 'react-router-dom';
import ProductService from '../services/ProductService';

const { Option } = Select;
const Header = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(() => {
    ProductService.getAllProduct().then((getData) => {
      setProducts(getData.data);
    });
  }, []);

  useEffect(() => {
    CategoryService.getCategories().then((getData) => {
      setCategories(getData.data);
    });
  }, []);

  const logout = async (e) => {
    AuthService.logout();
    navigate('/')
    window.location.reload();
  };


  function onChange(value) {
    navigate(`/booking/${value}`, { state: { product: products.find((i) => i.id == value) } });
    console.log(`selected ${value}`);
  }

  function onBlur(e) {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  function onClickOption(id) {
    console.log(id);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {!currentUser ? (
              <a class="lh_item" href="/login">
                <div class="icon">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/2048px-Ic_person_48px.svg.png"
                    alt="authorization"
                  />
                </div>
                <div class="lh-text">
                  <h1>Вход</h1>
                </div>
              </a>
            ) : (
              'Здравствуйте ' + currentUser.username
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {!!currentUser && currentUser.role == 'customer' && (
                <>
                  <NavDropdown title="Категория товаров" id="navbarScrollingDropdown">
                    {categories.map((data) => {
                      return (
                        <NavDropdown.Item
                          onClick={() => navigate(`/products/${data.id}`)}
                          key={data.id}>
                          {data.name}
                        </NavDropdown.Item>
                      );
                    })}

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/condition">Условия Аренды</Nav.Link>
                  <Nav.Link href="/review">Отзывы</Nav.Link>
                  <Nav.Link href="/guarantee">Гарантии</Nav.Link>
                  <Nav.Link href="/delivery">Доставка</Nav.Link>
                  <Nav.Link href="/contacts">Контакты</Nav.Link>
                  <Nav.Link href="/about">О нас</Nav.Link>
                </>
              )}
              {!currentUser && (
                <>
                  <NavDropdown title="Категория товаров" id="navbarScrollingDropdown">
                    {categories.map((data) => {
                      return (
                        <NavDropdown.Item
                          onClick={() => navigate(`/products/${data.id}`)}
                          key={data.id}>
                          {data.name}
                        </NavDropdown.Item>
                      );
                    })}

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/condition">Условия Аренды</Nav.Link>
                  <Nav.Link href="/review">Отзывы</Nav.Link>
                  <Nav.Link href="/guarantee">Гарантии</Nav.Link>
                  <Nav.Link href="/delivery">Доставка</Nav.Link>
                  <Nav.Link href="/contacts">Контакты</Nav.Link>
                  <Nav.Link href="/about">О нас</Nav.Link>
                </>
              )}
              {!!currentUser && currentUser.role == 'admin' && (
                <>
                  <Nav.Link href="/admin/products"> Продукты</Nav.Link>
                  <Nav.Link href="/admin/category"> Категории</Nav.Link>
                  <Nav.Link href="/admin/forms">Административная панель</Nav.Link>
                  <Nav.Link href="/admin/orders">Заказы</Nav.Link>
                </>
              )}
            </Nav>
            {!!currentUser ? (
              <a class="lh_item" href="#" onClick={logout}>
                <div class="icon">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/1200px-OOjs_UI_icon_logOut-ltr.svg.png"
                    alt="basket"
                  />
                </div>
                <div class="lh-text">
                  <h1>Выйти</h1>
                  <h6>0тг</h6>
                </div>
              </a>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" className="d-flex justify-content-center">
        <Select
          showSearch
          style={{ width: 800 }}
          placeholder="Поиск"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={(e) => onBlur(e)}
          onSearch={onSearch}
          filterOption={(search, item) => {
            return item.children.toLowerCase().indexOf(search.toLowerCase()) >= 0;
          }}>
          {products.map((item) => (
            <Option key={item.id} value={item.id} onClick={() => onClickOption(item.id)}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Navbar>
    </div>
  );
};

export default Header;
