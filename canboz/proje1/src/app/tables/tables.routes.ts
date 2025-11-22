import { Routes } from "@angular/router";
import { TablesHome } from "./pages/tables-home/tables-home";
import { Biography } from "./components/biography/biography";
import { Companies } from "./components/companies/companies";
import { Partners } from "./components/partners/partners";

export const TablesRoutes: Routes = [
   {
      path: "",
      component: TablesHome,
      children: [
         { path: "", component: Biography },
         { path: "companies", component: Companies },
         { path: "partners", component: Partners },
      ],
   },
];
