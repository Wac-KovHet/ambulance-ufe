import { newSpecPage } from '@stencil/core/testing';
import { ShettesAmbulanceWlList } from '../shettes-ambulance-wl-list';

describe('shettes-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShettesAmbulanceWlList],
      html: `<shettes-ambulance-wl-list></shettes-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <shettes-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shettes-ambulance-wl-list>
    `);
  });
});
