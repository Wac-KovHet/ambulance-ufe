import { newSpecPage } from '@stencil/core/testing';
import { ShettesAmbulanceWlList } from '../shettes-ambulance-wl-list';

describe('shettes-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShettesAmbulanceWlList],
      html: `<shettes-ambulance-wl-list></shettes-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as ShettesAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
