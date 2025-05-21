Objective:
Build a form in React where the user can dynamically add or remove multiple "Experience" entries.

Each experience entry should have these fields:

Company Name (text input)
Role (text input)
Years (number input)

-------------------------------------------------
| Company Name: [Google       ]                 |
| Role:         [Frontend Dev ]                 |
| Years:        [2 ]     [Remove ❌]            |
-------------------------------------------------
| Company Name: [___________]                   |
| Role:         [___________]                   |
| Years:        [__]     [Remove ❌]            |
-------------------------------------------------

[+ Add More Experience]

[Submit]
-----------------------------------------------------------------------------------------------------------------------


export default function App() {
  const [form, setForm] = useState([{ company: "", role: "", year: "" }]);

  const addExp = () => {
    setForm([...form, { company: "", role: "", year: "" }]);
  };
  const handleSubmit = () => {
    // console.log("Submitted Experiences:", experiences);
    alert("form submitted");
  };
  const handleChange = (index: number, field: any, value: any) => {
    const updated = [...form];
    updated[index][field] = value;
    setForm(updated);
  };

  return (
    <div className="App">
      <h1>Dynamic Form </h1>
      {/* {count && ( */}
      {form.map((exp: any, index: any) => (
        <div
          key={index}
          style={{ border: "6px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <label> Company Name:</label>
          <input
            placeholder="Enter Company Name"
            type="text"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
          />
          <br />
          <label> Role:</label>
          <input
            placeholder="Enter Role"
            type="text"
            value={exp.role}
            onChange={(e) => handleChange(index, "role", e.target.value)}
          />
          <br />
          <label> Age :</label>
          <input
            placeholder="Enter Age"
            type="number"
            value={exp.age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
          />
          <br />
        </div>
      ))}
      <div>
        <button onClick={addExp}> + Add Exp </button>
      </div>
      <br />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
}
