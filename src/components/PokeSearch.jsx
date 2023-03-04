import { useRef } from "react";
import {
  ButtonGroup,
  Button,
  ButtonToolbar,
  Form,
  InputGroup,
} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai";


function PokeSearch(props) {

    const inputSearch = useRef(null)

    const handleChange = (e) => {
        props.handleFilter(e)
    }
    

  return (
    <ButtonToolbar className="my-3 mx-2 d-flex justify-content-center " aria-label="Toolbar with Button groups">
      <ButtonGroup  aria-label="First group">
        <Form.Select aria-label="Default select example" className="me-3" onChange={handleChange}>
            <option disabled>Trier par région</option>
            <option value="0" className="fw-bold" >Toutes</option>
            <option value="1">Kanto</option>
            <option value="2">Johto</option>
            <option value="3">Hoenn</option>
            <option value="4">Sinnoh</option>
            <option value="5">Unys</option>
            <option value="6">Kalos</option>
            <option value="7">Alola</option>
            <option value="8">Galar</option>
        </Form.Select>
        <form onSubmit={(e) => {e.preventDefault(); console.log(inputSearch.current.value)}} className="w-100">
            <InputGroup>
                <Form.Control
                    type="search"
                    placeholder="Rechercher"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                    ref={inputSearch}
                    />
                <Button type="submit" id="btnGroupAddon" className="d-flex justify-content-center align-items-center" variant="outline-light">
                    <AiOutlineSearch />
                </Button>
            </InputGroup>
        </form>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default PokeSearch;
