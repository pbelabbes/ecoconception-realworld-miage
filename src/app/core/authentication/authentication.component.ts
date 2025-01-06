import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {ListErrorsComponent} from "../../shared/list-errors.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  imports: [RouterLink, NgIf, ListErrorsComponent, ReactiveFormsModule],
  standalone: true,
})
export class AuthenticationComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
