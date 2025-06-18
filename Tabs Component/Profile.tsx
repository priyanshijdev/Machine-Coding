const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  
  const handleChange = (e: any, item: any) => {
    const value = e.target.value;
    setData((prevData: any) => ({
      ...prevData,
      [item]: value,
    }));
  };

  
  return (
    <>
      <div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => handleChange(e, "age")}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
