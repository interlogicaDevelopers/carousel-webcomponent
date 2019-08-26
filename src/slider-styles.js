import { html } from 'lit-element';

const WIDTH = 487;
const HEIGHT = 263;

export const SliderStyles = html`
<style>
  ul, menu, dir {
    padding-inline-start: 0px;
  }

  .frame {
    width: ${ WIDTH }px;
    height: ${ HEIGHT }px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .slides {
    display: inline-block;
    margin: 0;
  }

  li {
    position: relative;
    display: inline-block;
    width: ${ WIDTH }px;
  }

  .controls {
    display: flex;
    flex-direction: row;
    width: ${ WIDTH }px;
  }

  .prev, .next {
    cursor: pointer;
    flex-grow: 1;
  }

  .next.disabled svg, .prev.disabled svg {
    fill: rgba(0, 0, 0, 0.2)
  }

  .next svg, .prev svg {
    width: 25px;
    fill: #fff;
  }

  .dots {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dots > li {
    background-color: #eee;
    border: 1px solid #666;
    border-radius: 5px;
    box-shadow: inset 1px 1px 1px #888;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    cursor: pointer;
  }

  .dots > li.active {
    background-color: #41ABE5;
  }
}
</style>
`;