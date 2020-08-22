import UIStore from '../src/stores/ui.store';
import FormStore from '../src/stores/form.store'
import ComponentStore from '../src/stores/component.store';

class DomainStore{
  // Import external stores
  constructor() {

    this.uiStore = UIStore;
    this.formStore = FormStore;
    this.componentStore = ComponentStore;

  }
}
export default new DomainStore();