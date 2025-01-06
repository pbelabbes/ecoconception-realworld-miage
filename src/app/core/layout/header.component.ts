import { AsyncPipe, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ShowAuthedDirective } from "../../shared/show-authed.directive";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.css"], // Ajouter le fichier CSS ici
  imports: [RouterLinkActive, RouterLink, AsyncPipe, NgIf, ShowAuthedDirective],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser;

  ngAfterViewInit() {
    // Example of using plain JavaScript to manipulate the DOM
    const headerElement = document.querySelector(
      ".logo-que-ya-dans-le-header"
    ) as HTMLElement;
    if (headerElement) {
      headerElement.style.height = "60px";
    }
  }
}
