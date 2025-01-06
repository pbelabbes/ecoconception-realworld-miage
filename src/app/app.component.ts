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
              style({
                transform: "translateX(100%) rotate(0deg) scale(0.8)",
                opacity: 0,
              }),
              animate(
                "0.7s ease-out",
                style({
                  transform: "translateX(0%) rotate(360deg) scale(1)",
                  opacity: 1,
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({
                transform: "translateX(0%) rotate(0deg) scale(1)",
                opacity: 1,
              }),
              animate(
                "0.7s ease-out",
                style({
                  transform: "translateX(-100%) rotate(-360deg) scale(0.8)",
                  opacity: 0,
                })
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

  ngAfterViewInit() {
    this.createSnowflakes();
  }

  createSnowflakes() {
    const container = document.getElementById("snowflakeContainer");
    if (!container) return;

    const numberOfSnowflakes = 50;
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(snowflake);
    }
  }
}
