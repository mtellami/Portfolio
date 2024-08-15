import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "@modules/home";
import { AboutComponent } from "@modules/about";
import { ProjectsComponent } from "@modules/projects";
import { ContactComponent } from "@modules/contact";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
			{
				path: '',
				component: HomeComponent
			},
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
