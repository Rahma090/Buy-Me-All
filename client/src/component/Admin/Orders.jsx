import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);

  const extractIdsUsers = (objectsArray) => {
    return objectsArray.map((obj) => obj.userId);
  };

  const extractIdsProducts = (objectsArray) => {
    return objectsArray.map((obj) => obj.productId);
  };

  const filterObjectsByIds = (objects, targetIds) => {
    return objects.filter((obj) => targetIds.includes(obj.id));
  };

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/orders');
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  }, []);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/users');
        const ids = extractIdsUsers(orders);
        const user = res.data.filter((e) => ids.includes(e.id));
        setUsers(user);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/products');
        const ids = extractIdsProducts(orders);
        const prod = res.data.filter((e) => ids.includes(e.id));
        setProducts(prod);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllUsers();
    fetchAllProducts();
  }, [orders]);

  const getOrdersByUser = () => {
    const userOrders = users.map((user) => {
      const userOrderIds = orders.filter((order) => order.userId === user.id).map((order) => order.productId);
      const userOrderProducts = products.filter((product) => userOrderIds.includes(product.id));
      return {
        user_name: user.user_name,
        user_img: user.user_img,
        products: userOrderProducts,
      };
    });
    setRows(userOrders);
  };

  useEffect(() => {
    getOrdersByUser();
  }, [orders, users, products]);

  return (
    <div>
      {rows.map((user, i) => (
        <TableContainer component={Paper} key={i}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }} placement="top">
             <p></p>
            </caption>
            <TableHead>
              <TableRow style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={user.user_img} sx={{ width: 56, height: 56 }} />
                  </Stack>
                  <h3>{user.user_name}</h3>
                </TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}></TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}></TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}></TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Product Image</TableCell>
                <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  Product Name
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  Product Price
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  Product Rate
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  Product Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.products.map((row, j) => (
                <TableRow key={j}>
                  <TableCell component="th" scope="row" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={row.image} sx={{ width: 45, height: 45 }} />
                  </Stack>
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  {row.product_name}
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  {row.price}
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  {row.rate}
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default Orders;
