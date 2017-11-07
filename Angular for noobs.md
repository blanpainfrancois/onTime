# Angular CLI for noobs

1. Aanmaken project
	> ng new <projectnaam>

2. Run project
	> ng serve

3. Genereren componenten
	> ng generate component <componentnaam>
	> ng generate service	<servicenaam>

4. Importeren van componenten
	> automatisch via generatie hierboven
	> import { modulenaam } from '@angular/modulenaam';

5. Linken van componenten
	> Open app.component html
		> <app-{naam}></app-{naam}>

	>> Css automatisch gelinkt in app.component.css met app.component.html
		>> geld voor ieder gegenereerd component