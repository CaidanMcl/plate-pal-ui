import { Component, OnInit } from '@angular/core';
import { PlatePalService } from '../plate-pal.service';

@Component({
  selector: 'app-number-plate-list',
  templateUrl: './number-plate-list.component.html',
  styleUrls: ['./number-plate-list.component.css']
})
export class NumberPlateListComponent implements OnInit {
  numberPlates: any[] = [];

  constructor(private platePalService: PlatePalService) {}

  ngOnInit(): void {
    this.loadNumberPlates();
  }

  loadNumberPlates(): void {
    this.platePalService.getAllNumberPlates().subscribe(data => {
      this.numberPlates = data;
    });
  }

  updatePlate(id: string, updates: any): void {
    this.platePalService.updateNumberPlate(id, updates).subscribe(() => {
      this.loadNumberPlates(); // Refresh the list after updating
    });
  }

  deletePlate(id: string): void {
    this.platePalService.deleteNumberPlate(id).subscribe(() => {
      this.loadNumberPlates(); // Refresh the list after deleting
    });
  }
}
