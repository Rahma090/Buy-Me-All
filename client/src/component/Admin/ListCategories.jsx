import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Collapse, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UpdateCategory from './UpdateCategory';

const ListCategories = () => {
  const [data, setData] = useState([]);
  const [openRows, setOpenRows] = useState({}); // State to manage open/closed status for each row
  const [refrechers, setRefrechers] = useState(false)
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/category');
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refrechers]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/BuyMeAll/category/${id}`);
    setRefrechers(!refrechers)
    } catch (err) {
      console.log(err);
    }
  };

  const handleRowToggle = (id) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category picture</TableCell>
            <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category ID</TableCell>
            <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category Name</TableCell>
            <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category Created At</TableCell>
            <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleRowToggle(row.id)}
                  >
                    {openRows[row.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  <img
                    loading="lazy"
                    srcSet={row.ca_img}
                    className="imgAdmin5"
                   
                  />
                </TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.id}</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.ca_name}</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.createdAt}</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                  <button onClick={() => handleDelete(row.id)}>Delete</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={openRows[row.id]} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        <UpdateCategory id={row.id} />
                      </Typography>
                      {/* Add additional information here */}
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListCategories;
