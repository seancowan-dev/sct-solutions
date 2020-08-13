import UIStore from '../src/stores/ui.store';
import FormStore from '../src/stores/form.store'

class DomainStore{
  // Import external stores
  constructor() {

    this.uiStore = UIStore;
    this.formStore = FormStore;

  }
}
export default new DomainStore();