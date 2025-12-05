import "./styles.css";
import { mockData } from "./mock.js";
import { useState } from "react";

// mock.js
export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //utility for fetching search data
  const filteredData = mockData.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      // item.trackingId.toLowerCase().includes(term) ||
      item.origin.toLowerCase().includes(term) ||
      item.destination.toLowerCase().includes(term)
    );
  });
  // pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="App">
      <h2>Shipment Tracking</h2>
      <div>
        <input
          className="search-ship"
          type="text"
          placeholder="Search by tracking ID, or destination..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="shipment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tracking ID</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Date</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.trackingId}</td>
              <td>{item.origin}</td>
              <td>{item.destination}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination UI */}
      {paginatedData.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
