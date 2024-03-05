import { newSpecPage } from '@stencil/core/testing';
import { XhettesAmbulanceWlEditor } from '../xhettes-ambulance-wl-editor';

describe('xhettes-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [XhettesAmbulanceWlEditor],
      html: `<xhettes-ambulance-wl-editor entry-id="@new"></xhettes-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
