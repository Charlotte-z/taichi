import { Component, h } from '@stencil/core';

@Component({
  tag: 't-flow-layout',
  styleUrl: 't-flow-layout.scss',
  shadow: true,
})
export class FlowLayout {

  render() {
    return <div class='layout'>
        <div class='layout__left'>left menu</div>
        <div class='layout__right'>right content</div>
    </div>;
  }
}
