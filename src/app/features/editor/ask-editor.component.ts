import {NgForOf, NgIf} from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, combineLatest } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Errors } from "../../core/models/errors.model";
import { ArticlesService } from "../../core/services/articles.service";
import { UserService } from "../../core/services/user.service";
import { ListErrorsComponent } from "../../shared/list-errors.component";

interface ArticleForm {
  title: FormControl<string>;
  description: FormControl<string>;
  body: FormControl<string>;
}

@Component({
  selector: "app-askeditor-page",
  templateUrl: "./ask-editor.component.html",
  imports: [ListErrorsComponent, ReactiveFormsModule, NgForOf, NgIf],
  standalone: true,
})
export class AskEditorComponent implements OnInit, OnDestroy {
  isVerify = false;
  constructor(

  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  publishArticle() {
    alert("Activer le son pour entendre les applaudissements");
    const audio = new Audio("assets/Applaudissements.wav");
    audio.play();

    setTimeout(() => {
      audio.pause();
      window.location.replace("/editor/publish");
    }, 2000);
  }
}
