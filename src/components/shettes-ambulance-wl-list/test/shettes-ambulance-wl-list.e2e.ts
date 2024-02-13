import { newE2EPage } from '@stencil/core/testing';

describe('shettes-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shettes-ambulance-wl-list></shettes-ambulance-wl-list>');

    const element = await page.find('shettes-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
