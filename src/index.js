import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "React", level: "beginner", color: "green" },
  { skill: "JavaScript", level: "intermediate", color: "Teal" },
  { skill: "Html / Css", level: "advanced", color: "blue" },
  { skill: "Web Design", level: "advanced", color: "red" },
  { skill: "Git / GitHub", level: "intermediate", color: "yellow" },
  { skill: "Next.js", level: "beginner", color: "aqua" },
];

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
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
