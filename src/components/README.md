# Components

## [skill.js](./skill.ts)
This is a simple component that displays a skill, a level of proficiency, and progress bar in the specified color
<Skill skill="React" level="90" color="blue" />
```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```
