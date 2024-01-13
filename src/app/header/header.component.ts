import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // You can handle the selected mode in your component logic
  selectMode(selectedMode: string) {
    console.log(`Selected mode: ${selectedMode}`);
    // Add logic to handle the selected mode as needed
  }

  openUserMenu() {
    // Add logic for opening the user menu
    console.log('Open user menu clicked');
  }
}
