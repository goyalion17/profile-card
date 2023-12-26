import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar src={"avatar.avif"} name={"Avatar"} />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.src} alt={props.name} />;
}

function Intro() {
  return (
    <div>
      <h1 className="h1">Iryna Savelieva</h1>
      <p>
        As a React developer, I thrive on crafting dynamic and user-centric web
        applications. With a deep understanding of JavaScript, I leverage the
        power of React to build seamless and responsive interfaces. My expertise
        lies in architecting efficient components and employing state-of-the-art
        libraries to deliver immersive user experiences. I am passionate about
        staying abreast of React's latest advancements, continuously honing my
        skills to create innovative solutions and elevate digital experiences
        for users worldwide.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        skillName={"React"}
        style={{ backgroundColor: "green", color: "#fff" }}
      />
      <Skill
        skillName={"JavaScript"}
        style={{ backgroundColor: "blue", color: "#fff" }}
      />
      <Skill
        skillName={"Html / Css"}
        style={{ backgroundColor: "red", color: "#fff" }}
      />
      <Skill
        skillName={"Web Design"}
        style={{ backgroundColor: "yellow", color: "black" }}
      />
      <Skill
        skillName={"Git / GitHub"}
        style={{ backgroundColor: "aqua", color: "black" }}
      />
      <Skill
        skillName={"Next.js"}
        style={{ backgroundColor: "Teal", color: "#fff" }}
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={props.style} className="skill">
      {props.skillName}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
