import { newSpecPage } from '@stencil/core/testing';
import { XkovhetAmbulanceWlEmployeeList } from '../xkovhet-ambulance-wl-employee-list';

describe('xkovhet-ambulance-wl-employee-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkovhetAmbulanceWlEmployeeList],
      html: `<xkovhet-ambulance-wl-employee-list></xkovhet-ambulance-wl-employee-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xkovhet-ambulance-wl-employee-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkovhet-ambulance-wl-employee-list>
    `);
  });
});
