import { newSpecPage } from '@stencil/core/testing';
import { xhettesAmbulanceWlList } from '../xhettes-ambulance-wl-list';

describe('xhettes-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [xhettesAmbulanceWlList],
      html: `<xhettes-ambulance-wl-list></xhettes-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as xhettesAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
