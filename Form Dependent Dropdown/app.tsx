Form with Dependent Dropdowns
Level: Medium
What it tests: Conditional rendering, controlled inputs.

Build a form with two dropdowns — Country and State. When Country changes, fetch and show only relevant states. On Submit, log the form data.


export default function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const countryStateData = [
    {
      country: "India",
      states: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"],
    },
    {
      country: "USA",
      states: ["California", "Texas", "New York", "Florida"],
    },
    {
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Tasmania"],
    },
  ];

  const handleSubmit = () => {
    alert("form sumbitted successfully");
  };
  const handleCountry = (e: any) => {
    setCountry(e.target.value);
    setState("");
  };
  const states =
    countryStateData.find((item: any) => item.country === country)?.states ||
    [];

  return (
    <div className="App">
      <h1> Dependent Dropdowns: </h1>
      {/* country */}
      <form onSubmit={handleSubmit}>
        {/* <select> Country</select> */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Country</label>
          <select
            value={country}
            onChange={handleCountry}
            className="w-full border px-3 py-2"
            required
          >
            <option value="">Select Country</option>
            {countryStateData.map((item) => (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className="mb-4">
          <label className="block mb-1 font-semibold">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border px-3 py-2"
            required
            // disabled={!country}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
