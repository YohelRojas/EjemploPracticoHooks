import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as http from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, http.HttpClientModule],
  providers: [UserService]
})
export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  users: any[] = [];
  selectedUser: any = null;
  @ViewChildren('userList') userList!: QueryList<ElementRef>;

  constructor(private userService: UserService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // Método para cargar los datos simulando ngOnInit
  loadData() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Método para mostrar la lista simulando ngAfterViewInit
  showList() {
    setTimeout(() => {
      this.userList.forEach((element) => {
        console.log(element.nativeElement);
        // Aquí puedes manipular cada elemento de la lista si es necesario
      });
    }, 0);
  }

  // Método para seleccionar un usuario y mostrar sus detalles
  selectUser(user: any) {
    this.selectedUser = user;
  }
}
