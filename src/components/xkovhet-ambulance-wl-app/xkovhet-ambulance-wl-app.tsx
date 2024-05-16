import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window {
    navigation: any;
  }
}

@Component({
  tag: 'xkovhet-ambulance-wl-app',
  styleUrl: 'xkovhet-ambulance-wl-app.css',
  shadow: true,
})
export class XkovhetAmbulanceWlApp {
  @State() private relativePath = '';
  @Prop() basePath: string = '';
  @Prop() apiBase: string;

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length);
      } else {
        this.relativePath = '';
      }
    };

    window.navigation?.addEventListener('navigate', (ev: Event) => {
      if ((ev as any).canIntercept) {
        (ev as any).intercept();
      }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname);
  }

  render() {
    // Default values for element and entryId
    let element = '';
    let ambulanceId = '';
    let employeeId = '';

    // Splitting the relativePath into segments
    const segments = this.relativePath.split('/');

    if (segments.length === 2) {
      element = 'ambulance-editor';
      if (segments[1] !== '@new') {
        ambulanceId = segments[1];
      }
    } else if (segments.length === 3) {
      element = 'employee-list';
      ambulanceId = segments[1];
    } else if (segments.length === 4) {
      element = 'employee-detail';
      ambulanceId = segments[1];
      if (segments[3] !== '@new') {
        employeeId = segments[3];
      }
    }
    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute);
    };

    switch (element) {
      case 'ambulance-editor':
        element = (
          <xkovhet-ambulance-wl-editor
            ambulance-id={ambulanceId}
            api-base={this.apiBase}
            oneditor-closed={() => navigate('./list')}
            onemployee-list={() => navigate(this.relativePath + '/employee-list')}
          ></xkovhet-ambulance-wl-editor>
        );
        break;
      case 'employee-list':
        console.log('employee-list');
        element = (
          <xkovhet-ambulance-wl-employee-list
            ambulanceId={ambulanceId}
            api-base={this.apiBase}
            onemployee-clicked={(ev: CustomEvent<string>) => navigate(this.relativePath + '/' + ev.detail)}
            oneditor-closed={() => navigate('./list')}
          ></xkovhet-ambulance-wl-employee-list>
        );
        break;
      case 'employee-detail':
        element = (
          <xkovhet-ambulance-wl-employee-editor
            ambulanceId={ambulanceId}
            employeeId={employeeId}
            api-base={this.apiBase}
            onEditor-closed={() => navigate('ambulances/' + ambulanceId + '/employee-list')}
          />
        );
        break;
      default:
        element = (
          <xkovhet-ambulance-wl-list
            ambulance-id={ambulanceId}
            api-base={this.apiBase}
            onentry-clicked={(ev: CustomEvent<string>) => navigate('./ambulances/' + ev.detail)}
          ></xkovhet-ambulance-wl-list>
        );
        break;
    }

    return (
      <Host>
        <xkovhet-navigation />
        <xkovhet-footer />
        {element}
      </Host>
    );
  }
}
