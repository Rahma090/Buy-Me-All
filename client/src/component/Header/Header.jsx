import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from "@mui/icons-material/Search";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

const tabPages = ['Home', 'Contact', 'About', 'Sign up'];
const settings = ['Manage My Account', 'My Order', 'My review', 'Logout'];


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#000', 
  '&.Mui-selected': {
    color: 'grey',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    color: "#000",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black,
}));

const StyledInputBase = styled("input")(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: "200px",
}));

function Header({value}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState(value);
  const navigate=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabChange = (event, newValue) => {
    
    if(newValue===0) navigate('/')
    else if(newValue===3) navigate('/SignIn')
    setSelectedTab(newValue);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Buy Me All
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Tabs value={selectedTab} onChange={handleTabChange}>
              {tabPages.map((page, index) => (
                <StyledTab

                  key={page}
                  label={page}
                  onClick={() => setSelectedTab(index)}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="type to search"
                  />
                </Search>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <StyledIconButton
                    size="large"
                    aria-label="Wish List"
                  >
                    <Badge color="error">
                      <FavoriteIcon />
                    </Badge>
                  </StyledIconButton>
                  <StyledIconButton
                    size="large"
                    aria-label="Cart"
                    color="inherit"
                    sx={{ mr: 1 }}
                  >
                    <Badge badgeContent={3} color="error">
                      <ShoppingCartIcon/>
                    </Badge>
                  </StyledIconButton>
                </Box>
                <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/2.jpg"
  sx={{
    width: 32,
    height: 32,
    cursor: 'pointer',
  }}
  onClick={handleOpenUserMenu}
/>
              </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
