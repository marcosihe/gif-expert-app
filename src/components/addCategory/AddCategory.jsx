import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import styles from './AddCategory.module.scss';

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { setCategories } = props;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validación de la categoría a agregar
    if (inputValue.trim().length > 2) {
      setCategories((categs) => [inputValue, ...categs]);
      setInputValue("");
    }
  };

  const handleClick = (e) => handleSubmit(e);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="agregar-categoria" sx={{color: '#e3f2fd'}}>Agregar Categoría</InputLabel>
          <Input
            id="agregar-categoria"
            aria-describedby="nueva-categoria"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            sx={{color: '#e3f2fd'}}
          />
          <FormHelperText id="nueva-categoria">
            Campo para agregar categoría.
          </FormHelperText>
        </FormControl>
        <Button variant="contained" sx={{color: '#e3f2fd'}} color="success" onClick={handleClick}>
          Agregar
        </Button>
      </FormGroup>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
