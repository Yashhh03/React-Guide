import classes from "./NewPost.module.css";

export default function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          name="body"
          id="body"
          required
          rows={3}
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      {/* <p>{enteredBody}</p> */}
      <p>
        <label htmlFor="name">Your Name</label>
        <textarea
          type="text"
          id="name"
          required
          onChange={props.onAuthorChange}
        ></textarea>
      </p>
    </form>
  );
}
