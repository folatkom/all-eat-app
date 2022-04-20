import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../api-service.service';
import { User } from 'app/app.component';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  showList: boolean = false;
  users$: Observable<User[]>;
  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.users$ = this.api.getUsers();
  }
  toggleList() {
    this.showList = !this.showList;
  }
  searchUsers(event: any) {
    const inputValue = event.target.value;
    this.users$ = this.api.searchUsers(inputValue);
  }
}
