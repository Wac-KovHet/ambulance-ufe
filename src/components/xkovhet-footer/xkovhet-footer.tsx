import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'xkovhet-footer',
  styleUrl: 'xkovhet-footer.css',
  shadow: true,
})
export class XkovhetFooter {
  @Prop() initialButtonText: string = 'Back'; // Use initialButtonText to set the initial button text
  @State() buttonText: string; // Use State decorator for dynamic updates

  componentWillLoad() {
    this.buttonText = this.initialButtonText;
  }

  handleClick() {
    let path = window.location.pathname;
    let segments = path.split('/');
    if (segments.length == 1 || segments.length == 2) {
      this.buttonText = 'Close'; // Update the value of buttonText
      this.initialButtonText = 'Close'; // Update the value of initialButtonText
    } else {
      window.history.back();
    }
  }

  render() {
    return (
      <Host>
        <div class="footer">
          <div class="actions">
            <md-outlined-button onClick={this.handleClick}>
              <md-icon slot="icon">arrow_back</md-icon>
              {this.buttonText}
            </md-outlined-button>
          </div>
        </div>
      </Host>
    );
  }
}
