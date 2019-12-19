import { GenericGridComponent } from './generic-grid/generic-grid.component';
import {
  ɵrenderComponent as renderComponent,
  ɵmarkDirty as markDirty,
  Injector,
  NgZone
} from '@angular/core';

// const zoneDeps = { enableLongStackTrace: false, shouldCoalesceEventChangeDetection: false };

// export const injector: Injector = Injector.create({
//   name: 'root',
//   providers: [{ provide: NgZone, useClass: NgZone, deps: [zoneDeps] }]
// });

// export const injector: Injector = Injector.create({
//   name: 'root',
//   providers: [
//       { provide: HttpClient, deps: [HttpHandler] },
//       { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest() }) }
//   ]
// });

export function defineElement(injector: Injector = getInjector()) {
  class GenericGridElement<TData> extends HTMLElement {
    private comp!: GenericGridComponent<TData>;

    private initted = false;

    public get testProperty() {
      return this.comp.testProperty;
    }
    public set testProperty(value: any) {
      this.comp.testProperty = value;
      markDirty(this.comp);
    }

    // Tell the browser to observe these attributes
    static get observedAttributes() {
      return ['test-property'];
    }

    constructor() {
      super();
    }

    connectedCallback() {
      console.log('connected', this);
      if (!this.initted) {
        const comp = renderComponent(GenericGridComponent, { host: this, injector });
        this.comp = comp as GenericGridComponent<TData>;

        setTimeout(() => {
          this.dispatchEvent(new CustomEvent('element-ready', { detail: this.comp }));
        }, 2500);

        this.comp.rowClicked.subscribe((row: TData) =>
          this.dispatchEvent(new CustomEvent('row-clicked', { detail: row }))
        );
      }

      this.initted = true;
    }

    // Delegate to respective property when attribute changes
    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      switch (name) {
        case 'testProperty':
          this.testProperty = newValue;
          break;
      }
    }
  }

  console.log('defining');

  customElements.define('generic-grids', GenericGridElement);
}
