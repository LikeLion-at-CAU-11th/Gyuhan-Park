import React from "react";
import { Link, useParams } from "react-router-dom";

const data = {
  naye: {
    name: "나예",
    description: "책 수집가",
  },
  moonbear: {
    name: "달곰",
    description: "왕 크니까 왕 귀엽다",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <div>
        <h2>{profile.name}</h2>
        <h2>{profile.description}</h2>
        <ul>
          <li>
            <Link to="/naye">나예집</Link>
          </li>
          <li>
            <Link to="/moonbear">문비어</Link>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default Profile;
