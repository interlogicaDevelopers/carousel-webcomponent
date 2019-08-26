import { html } from '@polymer/lit-element';

const SPACER = 5;

export const AppStyles = html`
<style>

  .app {
    text-align: center;
    font-family: sans-serif;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(to bottom, #74ABE2, #5563DE);
  }

  .app-logo {
    animation: app-logo-spin infinite 20s linear;
    height: 80px;
    margin-top: ${ SPACER * 2 }px;
  }

  .app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .app-title {
    font-size: 1.5em;
  }

  .app-intro {
    font-size: large;
  }

  .app-text {
    margin-top: ${ SPACER * 4 }px;
  }

  @keyframes app-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .app-link {
    position: fixed;
    bottom: ${ SPACER * 4 }px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
`;