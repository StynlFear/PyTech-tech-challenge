import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './FormsList.css';
import Sidebar from '../../components/sidebar/Sidebar';

const FormsList = () => {
  const [forms, setForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const formsPerPage = 5  ;
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
       <Sidebar/>
      <div style={{backgroundColor: '#DBEBFF', height: '100%'}}>
     <h1>Forms List</h1>
<input
  type="text"
  placeholder="Search forms by name"
  value={searchTerm}
  onChange={handleSearch}
  className="s-lp"
/>
{filteredForms.slice(pagesVisited, pagesVisited + formsPerPage).map((form) => (
  
  <div class="forms-container" >
    
  <div key={form._id} className="form">
    <h2 className='cerere-name'>{form.title}</h2>
    <h2 className='cerere-created'>Created on {new Date(form.retention_date).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}).replace(/\//g, '.')}</h2>
<img src="./src/images/form.png" alt="" className='formpic'/>
<h3 className='submision-cerere'>Submissions</h3>
<h3 className='publish-cerere'>Publish Form</h3>
<h3 className="more-cerere">More</h3>
    {form.sections.map((section) => (
      <div key={section._id}>

        {section.dynamic_fields.map((field) => (
          <div key={field._id}>
             {field.field_type.options.map((option) => (
              <div key={option}> </div>
              ))}
            
          </div>
        ))}
      </div>
    ))}
    <br />
  </div>
 
  </div>
  
))}
      <ReactPaginate
  previousLabel={'<'}
  nextLabel={'>'}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={'pagination'}
  previousLinkClassName={'previous-page'}
  nextLinkClassName={'next-page'}
  disabledClassName={'disabled'}
  activeClassName={'active'}
  pageRangeDisplayed={7}
  marginPagesDisplayed={1}
  breakLabel={'...'}
  breakClassName={'break'}
/>
<div className="sf-t">All Forms</div>
    </div>
    
    </div>

  );
};

export default FormsList;
