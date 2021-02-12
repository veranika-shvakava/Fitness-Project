import Home from "../pages/Home";
import Header from "../template/Header";
import Programs from "../pages/Programs";
import Goodstart from "../pages/Goodstart";
import Slimness from "../pages/Slimness";
import WithoutEquipment from "../pages/WithoutEquipment";
import GymWorkout from "../pages/GymWorkout";
import Collections from "../pages/Collections";
import Application from "../pages/Application";
import PersonalArea from "../pages/PersonalArea";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = {
  "/": Home,
  "/programs": Programs,
  "/programs/goodstart": Goodstart,
  "/programs/slimness": Slimness,
  "/programs/withoutequipment": WithoutEquipment,
  "/programs/gymworkout": GymWorkout,
  "/collections": Collections,
  "/application": Application,
  "/personalarea": PersonalArea,
  "/signin": SignIn,
  "/signup": SignUp
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  header.innerHTML = Header();
  let hash = getHash();
  let route = await getResolveRoutes(hash);
  let render = routes[route] ? routes[route] : ErrorNotFound;
  content.innerHTML = await render();
};

export default router;