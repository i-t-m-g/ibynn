import React, { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "data/navigation";

function Navigation() {
  const index = NAVIGATION_DEMO_2.findIndex(x => x.name === 'Category')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/json/categories`)
      .then(res => res.json())
      .then(({data}) => NAVIGATION_DEMO_2[index].children = data);
  });

  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_DEMO_2?.map((item) => (
        <NavigationItem key={Math.random()} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
