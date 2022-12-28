# React Portal
For my experience I rarely use React Portal in my work but sometimes it's really useful thing. `React portal` helps you not change architecture of App and just create `react portal`. 

## Where is the Portal used?
Portals are used in situations where it is necessary for child components to visually break out of the parent container. Typical examples of using portals:

* Modal dialog boxes.
* Pop-up hints.
* Pop-up business cards.
* Loaders.

## How to create React Portal?

The portal is created with `ReactDOM.createPortal(child, container)`. Here child is the React element, fragment, or string, and container is the location or `DOM` node where the portal should be added.

*Example:*

```high-light
import React from "react";
import ReactDOM from "react-dom";
import ModalItem from "./Modal";

const ModalPortal = ({ isOpen, toggleOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalItem toggleOpen={toggleOpen} />,
    document.body
  );
};

export default ModalPortal;
```

*View:*

![ReactPortal](https://user-images.githubusercontent.com/43606985/209804568-d7c40828-cd55-487b-b10d-a536fa690d90.PNG)

## What's important when using portals

* There are a few things to keep in mind when dealing with portals in React. These behaviors are not immediately noticeable if they are not familiar to you. So let's talk a little about them too.

* The bubbling event will work as usual, propagating events to ancestors in the React tree, regardless of the location of the portal node in the DOM.

* React controls portal nodes and its life cycle when rendering child elements using these portals.

* Portals only affect the DOM structure for HTML and do not affect the React component tree.

* HTML mount point predefined: When using portals, you must define an HTML DOM element as the mount point for the portal component.
