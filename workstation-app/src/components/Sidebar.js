import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Test
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Test
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Test
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Test
            </li>
          </ul>
        </div>
        

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Test
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Test
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Test
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
