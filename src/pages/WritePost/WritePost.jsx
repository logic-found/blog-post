import React from "react";
import "./WritePost.scss";

export default function WritePost() {
  return (
    <div className="writePost-div">
      <img
        src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="Imge here"
        className="writePost-img"
      />
      <form className="writePost">
        <div className="file-and-title">
          <label htmlFor="fileInput">
            <i className="fas fa-plus fileInput-icon"></i>
          </label>
          <input type="file" id="fileInput" className="fileInput" />
          <input
            type="text"
            placeholder="Title"
            className="title"
            autoFocus={true}
          />
          <button className="submit">Publish</button>
        </div>
        <textarea
          type="text"
          name=""
          id=""
          placeholder="Tell you story..."
          className="desc"
        ></textarea>
      </form>
    </div>
  );
}
