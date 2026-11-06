/** Client-owned styles leave with their slot registration. */
window.__ModuleLoader__.load({
  id: 'dsh-workspace-name-wrap',
  factory(require) {
    const React = require('react');
    const css = `
      [data-slot="sidebar.workspaces"] [data-row-key^="workspace:"] {
        height: auto !important;
        min-height: 34px;
        padding-block: 7px;
        align-items: flex-start;
      }
      /* Workspace rows contain folder, chevron, title container, actions. */
      [data-slot="sidebar.workspaces"] [data-row-key^="workspace:"] > span:nth-of-type(3) > span {
        white-space: normal !important;
        overflow-wrap: anywhere;
        overflow: visible;
        text-overflow: clip;
      }
    `;
    function WorkspaceNameStyles() {
      return React.createElement('style', { 'data-plugin': 'dsh-workspace-name-wrap' }, css);
    }
    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay', id: 'workspace-name-wrap',
        }, WorkspaceNameStyles));
      },
    };
  },
});
