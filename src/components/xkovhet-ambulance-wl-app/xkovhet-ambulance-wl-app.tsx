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
  @Prop() ambulanceId: string;

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
    let element = 'list';
    let entryId = '@new';

    console.log('relativePath', this.relativePath);
    if (this.relativePath.startsWith('entry/')) {
      element = 'editor';
      entryId = this.relativePath.split('/')[1];
    }

    if (this.relativePath === 'detail') {
      element = 'detail';
    }

    if (this.relativePath.endsWith('employee-list')) {
      element = 'employee-list';
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute);
    };

    switch (element) {
      case 'editor':
        element = (
          <xkovhet-ambulance-wl-editor
            entry-id={entryId}
            ambulance-id={this.ambulanceId}
            api-base={this.apiBase}
            oneditor-closed={() => navigate('./list')}
            onemployee-list={() => navigate(this.relativePath + '/employee-list')}
          ></xkovhet-ambulance-wl-editor>
        );
        entryId = this.relativePath.split('/')[1];
        break;
      case 'detail':
        element = <xkovhet-ambulance-wl-detail ambulance-id={this.ambulanceId} api-base={this.apiBase}></xkovhet-ambulance-wl-detail>;
        break;
      case 'employee-list':
        console.log('employee-list');
        element = (
          <xkovhet-ambulance-wl-employee-list
            ambulance-id={this.ambulanceId}
            api-base={this.apiBase}
            onemployee-clicked={(ev: CustomEvent<string>) => navigate('./employee/' + ev.detail)}
            oneditor-closed={() => navigate('./list')}
          ></xkovhet-ambulance-wl-employee-list>
        );
        break;
      default:
        element = (
          <xkovhet-ambulance-wl-list
            ambulance-id={this.ambulanceId}
            api-base={this.apiBase}
            onentry-clicked={(ev: CustomEvent<string>) => navigate('./entry/' + ev.detail)}
          ></xkovhet-ambulance-wl-list>
        );
        break;
    }

    return (
      <Host>
        <xkovhet-navigation />
        {element}
      </Host>
    );
  }
}
