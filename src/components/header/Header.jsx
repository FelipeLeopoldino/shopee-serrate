import styles from "./header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineClear } from "react-icons/ai";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import api from "../../api/api";
import PesquisaContext from "../../context/PesquisaContext";
import { borderRadius } from "@mui/system";

const Header = () => {
  const { searchValue, setSearchValue } = useContext(PesquisaContext);
  // const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue("");
  };
import styles from './header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch, BsCart3 } from 'react-icons/bs'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import api from '../../api/api'

const Header = () => {
   const [searchValue, setSearchValue] = useState('')

   const handleSearch = async event => {
      event.preventDefault()
      const response = await api.get(`/produtos?title=${searchValue}`)
      setSearchValue(response.data)
   }

   const pesquisaMenu = [
      { label: 'Masculino' },
      { label: 'Feminino' },
      { label: 'Joalheria' },
      { label: 'Informática' }
   ]

   return (
      <>
         <div className={styles.header}>
            <nav className={styles.nav}>
               <div className={styles.title}>
                  <Link to={'/'}>
                     <h1>SHOPEE SERRATEC</h1>
                  </Link>
               </div>

          <form className={styles.pesquisa_nome} onSubmit={handleSearch}>
            <Box
              sx={{
                width: 500,
                maxWidth: "90%",
                bgcolor: "white",
                boxShadow: 1,
                borderRadius: 5,
              }}
            >
              <TextField
                fullWidth
                value={searchValue}
                label="Pesquisar por nome"
                onChange={({ target }) => setSearchValue(target.value)}
              />
            </Box>
            <Link to={"/"}>
              <button
                onClick={() => {
                  setSearchValue("");
                }}
              >
                <AiOutlineClear className={styles.btn_clear} />
              </button>
            </Link>
          </form>

          <Link to="/carrinho">
            <button className={styles.btn_carrinho}>
              <BsCart3 />
            </button>
          </Link>
               <form className={styles.pesquisa_nome} onSubmit={handleSearch}>
                  <Box
                     sx={{
                        width: 500,
                        maxWidth: '80%',
                        bgcolor: 'white',
                        boxShadow: 1,
                        borderRadius: 3
                     }}
                  >
                     <TextField
                        fullWidth
                        value={searchValue}
                        label="Pesquisar por nome"
                        onChange={({ target }) => setSearchValue(target.value)}
                     />
                  </Box>
                  <button type="submit">
                     <BsSearch />
                  </button>
               </form>

               <div className={styles.pesquisa_categoria}>
                  <Autocomplete
                     disablePortal
                     id="combo-box-demo"
                     options={pesquisaMenu}
                     sx={{
                        width: 250,
                        bgcolor: 'white',
                        boxShadow: 1,
                        borderRadius: 3
                     }}
                     renderInput={params => (
                        <TextField {...params} label="Pesquisar Categoria" />
                     )}
                  />
               </div>

               <Link to="/carrinho">
                  <button>
                     <BsCart3 />
                  </button>
               </Link>

               <br />

          <Link to="/login">
            <button className={styles.btn_login}>
              <RiLoginBoxLine />
            </button>
          </Link>
               <Link to="/login">
                  <button>Login </button>
               </Link>

               <br />
            </nav>
         </div>
      </>
   )
}

export default Header
