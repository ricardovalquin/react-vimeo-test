/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Pager from 'react-pager';
import Content from '../Content/Content';
/* eslint-enable no-unused-vars */

function Category({ videos, pagination }) {
  return (
    <div className="page-wrapper">
      <Content videos={videos}/>
      <div className="pagger-wp">
        <Pager
          total={pagination.total}
          current={pagination.current}
          visiblePages={pagination.visiblePages}
          titles={pagination.titles}
          className="pagination-sm pull-right"
          onPageChanged={pagination.handlePageChanged}
        />
      </div>
    </div>
  );
}

Category.propTypes = {
  videos: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired
};

export default Category;
