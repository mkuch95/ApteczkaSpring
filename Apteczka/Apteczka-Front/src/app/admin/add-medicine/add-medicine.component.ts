import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-add-medicine",
  templateUrl: "./add-medicine.component.html",
  styleUrls: ["./add-medicine.component.css"]
})
export class AddMedicineComponent implements OnInit {
  name = "";
  company = "";
  description = "";
  composition = "";

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log("dodawanie leku");

    if (
      this.name == "" ||
      this.description == "" ||
      this.company == "" ||
      this.composition == ""
    ) {
      alert("Pola nie mogą być puste!");
      return;
    }

    var medicine = {
      name: this.name,
      company: this.company,
      description: this.description,
      composition: this.composition
    };

    this.httpClient
      .post(environment.apiEndpoint + "/medicine/add", medicine)
      .subscribe((data: any) => {
        this.router.navigate(["/medicines/list"]);
      });
  }
}
