import NavigationItem from "./NavigationItem";
import { NAVIGATION_VALUES } from "data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_VALUES().map((item) => (
        <NavigationItem key={Math.random()} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
