import { Component, View } from 'angular2/core';

@Component({
	selector: 'home'
})
@View({
	template: `
	<h1>{{ title }}</h1>
	`
})
export class HomeComponent {
	private title: string;

	constructor() {
		this.title = 'Angular 2 Seed Project';
	}
}