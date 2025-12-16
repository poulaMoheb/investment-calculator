import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormModule } from "./form/form.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent,
    ],
    imports: [BrowserModule, FormModule],
    bootstrap: [AppComponent]
})
export class AppModule {}