import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'xkovhet-navigation',
  styleUrl: 'xkovhet-navigation.css',
})
export class XkovhetNavigation {
  render() {
    return (
      <Host>
        <nav class="navbar">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <md-icon>local_hospital</md-icon>
              <span class="hospital-name">KovHet</span>
            </a>

            <span class="hospital-info">
              <span class="hospital-address">Ilkovičova 2</span>
              <span class="hospital-email">kovhet@stuba.sk</span>
            </span>
          </div>
        </nav>
      </Host>
    );
  }
}
