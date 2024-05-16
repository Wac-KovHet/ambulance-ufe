import { newE2EPage } from '@stencil/core/testing';

describe('xkovhet-ambulance-wl-employee-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovhet-ambulance-wl-employee-editor></xkovhet-ambulance-wl-employee-editor>');

    const element = await page.find('xkovhet-ambulance-wl-employee-editor');
    expect(element).toHaveClass('hydrated');
  });
});
