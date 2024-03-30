import { newE2EPage } from '@stencil/core/testing';

describe('xkovhet-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovhet-ambulance-wl-editor></xkovhet-ambulance-wl-editor>');

    const element = await page.find('xkovhet-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
