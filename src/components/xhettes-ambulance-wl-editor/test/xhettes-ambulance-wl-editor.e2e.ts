import { newE2EPage } from '@stencil/core/testing';

describe('xhettes-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhettes-ambulance-wl-editor></xhettes-ambulance-wl-editor>');

    const element = await page.find('xhettes-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
