import {Directive, OnInit} from '@angular/core';
import {AutoComplete} from 'primeng/autocomplete';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Directive({
  selector: 'p-autoComplete [appAutocomplete]'
})
export class AutocompleteDirective implements OnInit {

  constructor(private autocomplete: AutoComplete) {
  }

  ngOnInit(): void {
    this.autocomplete.completeMethod.subscribe(this.search.bind(this));
    this.autocomplete.forceSelection = true;
  }

  private search(event): void {
    of(['test']).pipe(delay(500)).subscribe(results => {
      this.autocomplete.suggestions = results;
    });
  }
}
