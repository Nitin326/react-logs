import {useState} from "react";
import Form from "react-bootstrap/Form";

function Search({handleFunc}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFunc(searchValue);
  };

  return (
    <Form className="search-bar mt-5" onSubmit={handleSubmit}>
      <Form.Group className="search_field" controlId="search_field">
        <Form.Control
          type="text"
          value={searchValue}
          placeholder="Enter Type"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Form.Group>
      <button className="custom-btn" type="submit">
        Search
      </button>
    </Form>
  );
}

export default Search;
