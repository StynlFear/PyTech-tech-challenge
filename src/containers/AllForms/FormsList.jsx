import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './FormsList.css';

const FormsList = () => {
  const [forms, setForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const formsPerPage = 1;
  const pagesVisited = pageNumber * formsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api-user-forms.herokuapp.com/v1/forms/');
      setForms(result.data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPageNumber(0);
  };

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredForms.length / formsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="forms-list">
      <h1>Forms List</h1>
      <input
        type="text"
        placeholder="Search forms by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredForms.slice(pagesVisited, pagesVisited + formsPerPage).map((form) => (
        <div key={form._id} className="form">
          <h2>{form.title}</h2>
          {form.dynamic_fields.map((field) => (
            <div key={field._id}>
              <p>{field.dynamic_field_name}</p>
              <p>{field.label}</p>
              <p>{field.placeholder}</p>
              <p>{field.mandatory ? "Required" : "Optional"}</p>
              <p>{field.keywords.join(", ")}</p>
              <p>{field.field_type[0].name}</p>
              <ul>
                {field.field_type[0].options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
          <br />
        </div>
      ))}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'previous-page'}
        nextLinkClassName={'next-page'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' ,color : '#000000' }}
      />
    </div>
  );
};

export default FormsList;