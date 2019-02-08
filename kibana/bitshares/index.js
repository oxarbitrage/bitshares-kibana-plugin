
export default function (kibana) {
  return new kibana.Plugin({
   uiExports: {
     app: {
        title: 'bitshares',
        order: -100,
        description: 'Bitshares Theme',
        main: 'plugins/bitshares/index.js',
        hidden: true
     }
    }
  });
};
