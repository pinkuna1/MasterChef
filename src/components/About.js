import React from 'react';
import UserClass from './UserClass';
import User from './User';
const About = () => {
  return (
    <div>
      <h1> this is namaste react</h1>
      <User name={"pinkuna(function)"}/>
      <UserClass name = {"Pinkuna Lenka(Class)"} place = {"bhubaneswar"} />
    </div>
  );
};

export default About;
