import { newE2EPage } from '@stencil/core/testing';

describe('xkovhet-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovhet-ambulance-wl-app></xkovhet-ambulance-wl-app>');

    const element = await page.find('xkovhet-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
