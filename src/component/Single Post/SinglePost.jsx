import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <img
        className="singlePost-img"
        src="https://images.unsplash.com/photo-1641516700730-27d477627e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
        alt="Img here"
      />
      <div className="singlePost-category-and-time">
        <div className="singlePost-category">Music</div>
        <div className="singlePost-time">1 hr ago</div>
      </div>
      <div className="singlePost-title">title</div>
      <div className="singlePost-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit? Tempora quae, dolores fugit reprehenderit labore odio quam, rerum voluptates iste repellendus saepe accusantium nemo fuga nihil vel mollitia eaque.
      Quidem natus ipsa unde rem reiciendis illo est ipsam maxime numquam, iure magni dolore omnis quo officiis voluptate amet ex officia! Ratione nihil obcaecati accusantium incidunt quo earum labore rem.
      Enim aliquid maxime autem nesciunt dolor error praesentium, doloremque nemo asperiores id ea totam assumenda alias accusantium qui sapiente exercitationem. Harum dolorem, perferendis quaerat animi veniam assumenda eos earum hic.
      Culpa porro eaque soluta sit facilis reprehenderit tempore dignissimos autem, eum qui ratione, ab quos deleniti exercitationem ad dicta officiis temporibus voluptates! Similique nihil sint numquam dignissimos ab pariatur vero!
      Tempore blanditiis a aperiam dolorum molestiae facilis quia magni error consequatur quasi perferendis placeat velit, repellat rerum id ab doloremque, eligendi perspiciatis. Maiores tempore ex blanditiis quia, hic sequi aspernatur.</div>
    </div>
  );
}
