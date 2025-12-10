import { useState } from "react";

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = [
    {
      country: "India",
      code: "IN",
      states: [
        {
          state: "Maharashtra",
          code: "MH",
          cities: [{ name: "Mumbai" }, { name: "Pune" }, { name: "Nagpur" }],
        },
        {
          state: "Karnataka",
          code: "KA",
          cities: [
            { name: "Bengaluru" },
            { name: "Mysuru" },
            { name: "Mangalore" },
          ],
        },
        {
          state: "Tamil Nadu",
          code: "TN",
          cities: [
            { name: "Chennai" },
            { name: "Coimbatore" },
            { name: "Madurai" },
          ],
        },
        {
          state: "Uttar Pradesh",
          code: "UP",
          cities: [
            { name: "Lucknow" },
            { name: "Kanpur" },
            { name: "Varanasi" },
          ],
        },
        {
          state: "West Bengal",
          code: "WB",
          cities: [
            { name: "Kolkata" },
            { name: "Darjeeling" },
            { name: "Asansol" },
          ],
        },
      ],
    },
    {
      country: "United States",
      code: "US",
      states: [
        {
          state: "California",
          code: "CA",
          cities: [
            { name: "Los Angeles" },
            { name: "San Francisco" },
            { name: "San Diego" },
          ],
        },
        {
          state: "Texas",
          code: "TX",
          cities: [{ name: "Houston" }, { name: "Dallas" }, { name: "Austin" }],
        },
        {
          state: "New York",
          code: "NY",
          cities: [
            { name: "New York City" },
            { name: "Buffalo" },
            { name: "Rochester" },
          ],
        },
      ],
    },

    // ---------------- Canada ----------------
    {
      country: "Canada",
      code: "CA",
      states: [
        {
          state: "Ontario",
          code: "ON",
          cities: [
            { name: "Toronto" },
            { name: "Ottawa" },
            { name: "Mississauga" },
          ],
        },
        {
          state: "British Columbia",
          code: "BC",
          cities: [
            { name: "Vancouver" },
            { name: "Victoria" },
            { name: "Surrey" },
          ],
        },
        {
          state: "Quebec",
          code: "QC",
          cities: [
            { name: "Montreal" },
            { name: "Quebec City" },
            { name: "Laval" },
          ],
        },
      ],
    },

    // ---------------- Australia ----------------
    {
      country: "Australia",
      code: "AU",
      states: [
        {
          state: "New South Wales",
          code: "NSW",
          cities: [
            { name: "Sydney" },
            { name: "Newcastle" },
            { name: "Wollongong" },
          ],
        },
        {
          state: "Victoria",
          code: "VIC",
          cities: [
            { name: "Melbourne" },
            { name: "Geelong" },
            { name: "Ballarat" },
          ],
        },
        {
          state: "Queensland",
          code: "QLD",
          cities: [
            { name: "Brisbane" },
            { name: "Gold Coast" },
            { name: "Cairns" },
          ],
        },
      ],
    },

    // ---------------- United Kingdom ----------------
    {
      country: "United Kingdom",
      code: "UK",
      states: [
        {
          state: "England",
          code: "ENG",
          cities: [
            { name: "London" },
            { name: "Manchester" },
            { name: "Birmingham" },
          ],
        },
        {
          state: "Scotland",
          code: "SCT",
          cities: [
            { name: "Edinburgh" },
            { name: "Glasgow" },
            { name: "Aberdeen" },
          ],
        },
        {
          state: "Wales",
          code: "WAL",
          cities: [
            { name: "Cardiff" },
            { name: "Swansea" },
            { name: "Newport" },
          ],
        },
      ],
    },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Get selected country object
  const countryData = countries.find((c) => c.country === selectedCountry);

  // Get selected state object
  const stateData = countryData?.states.find((s) => s.state === selectedState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Location</h2>

      {/* Country Dropdown */}
      <div style={{ marginBottom: "15px" }}>
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((c) => (
            <option key={c.code} value={c.country}>
              {c.country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown - only show if country selected */}
      {selectedCountry && (
        <div style={{ marginBottom: "15px" }}>
          <label>State: </label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {countryData?.states.map((s) => (
              <option key={s.code} value={s.state}>
                {s.state}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* City Dropdown - only show if state selected */}
      {selectedState && (
        <div style={{ marginBottom: "15px" }}>
          <label>City: </label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {stateData?.cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display selected values */}
      {selectedCountry && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>Country: {selectedCountry}</p>
          {selectedState && <p>State: {selectedState}</p>}
          {selectedCity && <p>City: {selectedCity}</p>}
        </div>
      )}
    </div>
  );
};

export default Page;
