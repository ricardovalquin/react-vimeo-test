/* eslint-disable no-unused-vars */
import React from 'react';
import Content from '../Content/Content';
/* eslint-enable no-unused-vars */

function Category(props) {
  return (
    <div className="page-wrapper">
      <Content videos={props.videos}/>
      <div className="pagger-wp">
        <Pager
          total={props.pagination.total}
          current={props.pagination.current}
          visiblePages={props.pagination.visiblePages}
          titles={props.pagination.titles}
          className="pagination-sm pull-right"
          onPageChanged={props.handlePageChanged}
        />
      </div>
    </div>
  );
}

export default Category;