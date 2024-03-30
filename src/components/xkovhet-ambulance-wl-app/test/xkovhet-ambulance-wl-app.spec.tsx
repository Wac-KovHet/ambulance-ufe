import { newSpecPage } from '@stencil/core/testing';
import { XkovhetAmbulanceWlApp } from '../xkovhet-ambulance-wl-app';

describe('xkovhet-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XkovhetAmbulanceWlApp],
      html: `<xkovhet-ambulance-wl-app base-path="/"></xkovhet-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xkovhet-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XkovhetAmbulanceWlApp],
      html: `<xkovhet-ambulance-wl-app base-path="/ambulance-wl/"></xkovhet-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xkovhet-ambulance-wl-list');
  });
});
