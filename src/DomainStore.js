import UIStore from '../src/stores/ui.store';
import FormStore from '../src/stores/form.store'
import ComponentStore from '../src/stores/component.store';
import _AdminStore from '../src/stores/_admin.store';
import _Routing from '../src/stores/_routing.store';

class DomainStore{
  // Import external stores
  constructor() {

    this.uiStore = UIStore;
    this.formStore = FormStore;
    this.componentStore = ComponentStore;
    this.adminStore = _AdminStore;
    this.routingStore = _Routing;

  }
}
export default new DomainStore();