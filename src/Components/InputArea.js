const InputArea = (props) => {
  return (
    <div class="d-grid gap-2 col-4 mx-auto">
      <input
        type="text"
        class="form-control"
        placeholder="0-100"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={props.submission}
        type="number"
        onChange={(event) => props.setSubmission(event.target.value)}
      />
      <button class="btn btn-primary" type="button" onClick={props.submit}>
        Guess
      </button>
    </div>
  );
};
export default InputArea;
