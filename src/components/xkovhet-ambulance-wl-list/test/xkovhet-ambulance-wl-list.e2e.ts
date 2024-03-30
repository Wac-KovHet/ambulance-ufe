import { newE2EPage } from '@stencil/core/testing';

describe('xkovhet-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovhet-ambulance-wl-list></xkovhet-ambulance-wl-list>');

    const element = await page.find('xkovhet-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
