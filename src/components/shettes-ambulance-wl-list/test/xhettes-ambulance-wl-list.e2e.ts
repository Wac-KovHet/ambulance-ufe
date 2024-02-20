import { newE2EPage } from '@stencil/core/testing';

describe('xhettes-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhettes-ambulance-wl-list></xhettes-ambulance-wl-list>');

    const element = await page.find('xhettes-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
