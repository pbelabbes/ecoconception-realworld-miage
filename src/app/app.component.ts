import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("routeAnimations", [
      transition("* <=> *", [
        query(
          ":enter, :leave",
          style({ position: "absolute", width: "100%" }),
          { optional: true }
        ),
        group([
          query(
            ":enter",
            [
              style({ transform: "translateX(100%)" }),
              animate("0.5s ease-out", style({ transform: "translateX(0%)" })),
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({ transform: "translateX(0%)" }),
              animate(
                "0.5s ease-out",
                style({ transform: "translateX(-100%)" })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
