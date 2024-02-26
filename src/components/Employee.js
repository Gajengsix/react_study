function Employee(props) {
  return (
    <>
      <h1>This is gajen {props.activity} </h1>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
}
export default Employee;
