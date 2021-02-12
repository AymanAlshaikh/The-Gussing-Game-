const PlayButton = (props) => {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <label for="customRange3" class="form-label">
        Choose number of attempts (5 max)
      </label>
      <input
        value={props.count}
        onChange={(event) => props.setCount(event.target.value)}
        type="range"
        class="form-range"
        min="1"
        max="5"
        step="1"
        id="customRange1"
      ></input>
      <button
        type="button"
        class="btn btn-outline-danger"
        onClick={() => props.setPlay()}
      >
        Play
      </button>
      {props.setOutput("")}
    </div>
  );
};
export default PlayButton;
