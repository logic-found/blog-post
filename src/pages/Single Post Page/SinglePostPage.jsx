import "./SinglePostPage.css";
import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";

export default function SinglePostPage() {
  return (
    <div className="singlePostPage">
      <div className="singlePostPage-content">
        <img
          className="singlePostPage-img"
          src="https://images.unsplash.com/photo-1695446635033-1079885b611b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80"
          alt="Img here"
        />
        <div className="singlePostPage-title">Title</div>

        <div className="singlePostPage-author-and-edit">
          
          <div className="singlePostPage-author">Author: Rashika Sahu <br /> 1hr ago</div>
          <div className="singlePostPage-edit-and-delete">
            <i class="singlePostPage-icons fa-regular fa-pen-to-square"></i>
            <i class="singlePostPage-icons fa-solid fa-trash"></i>
          </div>

        </div>
        <div className="singlePostPage-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam velit cupiditate rem nostrum magnam voluptates, voluptatum ab nemo odit itaque asperiores. Ullam dolor quibusdam, maiores eum reprehenderit aut commodi!
            Dolor vel illum eos reprehenderit assumenda esse incidunt neque perferendis sit, facere repellat enim tempora, debitis ipsa temporibus? Aut quis, nesciunt molestiae blanditiis praesentium rem esse deleniti sequi quidem dolore.
            Deleniti sequi error laudantium placeat omnis dolorum numquam. Nulla eveniet iusto adipisci et dolorem totam eius quas quidem eligendi impedit alias magni quis quam facere tempore cum earum? Odit, quam.</div>
      </div>
      <Sidebar />
    </div>
  );
}
