import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'task/:id',
    renderMode: RenderMode.Prerender, // tell Angular which IDs to prerender
    getPrerenderParams: () =>
      Promise.resolve([{ id: '1' }, { id: '2' }, { id: '3' }]),
  },
];
