import { newE2EPage } from '@stencil/core/testing';

describe('xkovhet-ambulance-wl-employee-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovhet-ambulance-wl-employee-list></xkovhet-ambulance-wl-employee-list>');

    const element = await page.find('xkovhet-ambulance-wl-employee-list');
    expect(element).toHaveClass('hydrated');
  });
});
