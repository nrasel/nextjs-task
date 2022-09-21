import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button, FormControl, OutlinedInput } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "1",
  },
  {
    value: "EUR",
    label: "2",
  },
  {
    value: "BTC",
    label: "3",
  },
  {
    value: "JPY",
    label: "4",
  },
];

const Header = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="flex justify-between  px-4 m-auto pt-9 pb-9 header-design">
      <div>
        <Image
          src={logo}
          alt="Picture of the author"
          width={100}
          height={50}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="flex justify-between">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Quick Access"
            onChange={handleChange}
            className="w-40 "
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <FormControl className="w-96 ml-1">
            <OutlinedInput placeholder="Please enter text" />
          </FormControl>
        </div>
        <div>
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center extre-design">
        <span>
          <TurnedInNotIcon style={{ width: "50px" }} />
        </span>
        <span>
          <NotificationsNoneIcon style={{ width: "50px" }} />
        </span>
        <span>
          <MailOutlineIcon style={{ width: "50px" }} />
        </span>
        <span className="mr-4">
          <PersonOutlineIcon style={{ width: "30px" }} />
          <p>Log In</p>
        </span>
        <button className="upload-btn">upload all related</button>
      </div>
    </div>
  );
};

export default Header;
