import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';

@Injectable()
export class VisualizerService {
  private configuration: Configuration = {
    showForm: false,
    showList: true
  }

  constructor() { }

  getConfiguration() {
    return this.configuration;
  }

  toggleShowForm() {
    this.configuration.showForm = !this.configuration.showForm;
  }
}
