import React from "react";
import Slider from "./Slider";
import "./ProjectView.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectView() {
  return (
    <div className="projectView-container">
      <Slider />
    <div className="buttons">
    <button className="button-slider">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text"> Project Code</span>
      </button>

      <button className="button-slider">
        <span className="shadow"></span>
        <span className="edge2"></span>
        <span className="front2 text"><GitHubIcon/> Project Code</span>
      </button>
    </div>


      <div className="projectView-text">
        <h1>Casa diaz SPA Ecommerce</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          labore. Repellat odio numquam distinctio qui, labore iure itaque
          aliquam amet voluptatibus, magnam quis ducimus iste deleniti ea sequi
          quia omnis recusandae inventore. Iusto odit, minus eligendi doloremque
          ipsa molestiae eos, debitis error, deserunt perferendis dolores neque
          quos earum unde placeat consectetur dolorum. Recusandae quidem magnam
          optio laborum voluptas praesentium dolorum earum tempore qui nostrum
          facere delectus, nobis dolore necessitatibus iure tenetur quasi
          consequuntur rerum perspiciatis hic ab! Pariatur dolorem tempora,
          labore quidem ipsa qui eveniet sit blanditiis ullam quis earum
          veritatis voluptas magnam nulla unde commodi, nisi saepe doloremque
          debitis!
        </p>
      </div>
    </div>
  );
}

export default ProjectView;
