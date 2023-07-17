import { React, useRef } from "react";
import { useKey } from "../useKey";
function NavSearchBar({ query, setQuery }) {
  //to select the search input after loading

  //first step  to use useRef is creating the useRef()
  const inputEl = useRef(null);

  //third step is use it after press in enter button

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      //second step is connection between the useRef and the element
      ref={inputEl}
    />
  );
}

export default NavSearchBar;
