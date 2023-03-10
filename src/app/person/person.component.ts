import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];
  showModal = false;
  selectedPerson!: Person;

  constructor(private service: PersonService) { }

  ngOnInit(): void {
    this.service.getResults().pipe(
      map((res: any) => res.results.sort((a:Person, b:Person) => {
        if (a.location.country < b.location.country) {
          return -1;
        } else if (a.location.country > b.location.country) {
          return 1;
        } else {
          return 0;
        }
      }))
    ).subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }

  openModal(person: Person) {
    this.selectedPerson = person;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
