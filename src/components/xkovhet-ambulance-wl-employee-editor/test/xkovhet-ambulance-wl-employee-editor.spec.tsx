import { newSpecPage } from '@stencil/core/testing';
import { XkovhetAmbulanceWlEmployeeEditor } from '../xkovhet-ambulance-wl-employee-editor';

describe('xkovhet-ambulance-wl-employee-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkovhetAmbulanceWlEmployeeEditor],
      html: `<xkovhet-ambulance-wl-employee-editor></xkovhet-ambulance-wl-employee-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <xkovhet-ambulance-wl-employee-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkovhet-ambulance-wl-employee-editor>
    `);
  });
});
