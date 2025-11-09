import React from "react";

const SearchFilterBar = ({ search, setSearch, filter, setFilter }) => {
    return (
        <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Tatooine">Tatooine</option>
                <option value="Alderaan">Alderaan</option>
                <option value="Naboo">Naboo</option>
            </select>
        </div>
    );
};

export default SearchFilterBar;
