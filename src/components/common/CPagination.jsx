import React from 'react'
import ReactPaginate  from 'react-paginate'

const CPagination = ({handleFunc}) => {
  return (
    <>
    <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        onPageChange={handleFunc}
        pageCount={17}
        breakLabel="..."
        marginPagesDisplayed={2}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  )
}

export default CPagination