import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'xkovhet-ambulance-wl-employee-editor',
  styleUrl: 'xkovhet-ambulance-wl-employee-editor.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEmployeeEditor {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
