import { Component } from '@angular/core';
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: 'gov-table',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './gov-table.component.html',
  styleUrl: './gov-table.component.css'
})
export class GovTableComponent {

}
