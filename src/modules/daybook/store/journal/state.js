//es reactivo y cuando se cambie este se notificara a todos los componentes donde se le esté escuchando

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac bibendum lacus. Maecenas semper varius est vitae euismod. Ut turpis ligula, eleifend eu lorem posuere, malesuada pretium eros.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'In odio metus, lobortis ut libero non, ullamcorper placerat erat. Pellentesque et orci et enim finibus convallis at et tortor.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Duis pulvinar mauris sit amet ex porttitor gravida. Duis ut tristique sapien, quis venenatis sem. Pellentesque a nunc augue. Ut eget tortor purus.',
      picture: null,
    },
  ]
})