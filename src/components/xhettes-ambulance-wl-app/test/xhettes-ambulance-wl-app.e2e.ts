import { newE2EPage } from '@stencil/core/testing';

describe('xhettes-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhettes-ambulance-wl-app></xhettes-ambulance-wl-app>');

    const element = await page.find('xhettes-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
