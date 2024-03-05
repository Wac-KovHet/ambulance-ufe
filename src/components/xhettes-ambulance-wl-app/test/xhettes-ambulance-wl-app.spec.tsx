import { newSpecPage } from '@stencil/core/testing';
import { XhettesAmbulanceWlApp } from '../xhettes-ambulance-wl-app';

describe('xhettes-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XhettesAmbulanceWlApp],
      html: `<xhettes-ambulance-wl-app base-path="/"></xhettes-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xhettes-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XhettesAmbulanceWlApp],
      html: `<xhettes-ambulance-wl-app base-path="/ambulance-wl/"></xhettes-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xhettes-ambulance-wl-list');
  });
});
