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
      setCategories((categs) => [...categs, inputValue]);
      setInputValue("");
    }
  };

  const handleClick = (e) => handleSubmit(e);

  return (
    <FormGroup onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="agregar-categoria">Agregar Categoría</InputLabel>
        <Input
          id="agregar-categoria"
          aria-describedby="nueva-categoria"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormHelperText id="nueva-categoria">
          Campo para agregar categoría.
        </FormHelperText>
      </FormControl>
      <Button variant="outlined" color="success" onClick={handleClick}>
        Agregar
      </Button>
    </FormGroup>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
