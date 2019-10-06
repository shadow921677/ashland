
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { LandOptions } from '../../interfaces/land-options';



@Component({
  selector: 'add-title',
  templateUrl: './add-title.page.html',
  styleUrls: ['./add-title.page.scss'],
})
export class AddTitlePage {
  land: LandOptions = { label: '', description: '', location: '', size: '', image: '' };
  submitted = false;
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(
    public router: Router,
  ) {}

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/my-land');
    }
  }
}
