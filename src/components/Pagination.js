import React, { useState, useEffect } from 'react'

const Pagination = ({ onPaginationChange, total }) => {

    const [counter, setCounter] = useState(1);
    const [showPerPage, setshowPerPage] = useState(10);
    const [numberOfButtons, setNumberOfButoons] = useState(
      Math.ceil(total / showPerPage)
    );

    useEffect(() => {
        onPaginationChange(counter,showPerPage);
    }, [counter, showPerPage]);

      const onButtonClick = (type) => {
        if (type === "prev") {
          if (counter === 1) {
            setCounter(1);
          } else {
            setCounter(counter - 1);
          }
        } else if (type === "next") {
          if (numberOfButtons === counter) {
            setCounter(counter);
          } else {
            setCounter(counter + 1);
          }
        }
      };

    return (
<div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={() => onButtonClick("prev")}
                        >
                            Previous
            </button>
                    </li>

                    <span style={{ margin: '10px' }} > {counter} </span>

                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={() => onButtonClick("next")}
                            disabled={Math.floor((total + 10 - 1) / 10) == counter ? true : false}
                        >
                            Next
            </button>
                    </li>

                    <li className="page-item">
                        <select
                            className="form-control"
                            placeholder="size"
                            style={{ marginLeft:'20px' }}
                            onChange={e =>setshowPerPage(e.target.value)}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </li>
                </ul>
      </nav>
    </div>
    )
}

export default Pagination;
