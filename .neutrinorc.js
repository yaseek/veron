const VERON = 'veron'

module.exports = {
  use: [
    ['@neutrinojs/react', {}],
    [
      '@neutrinojs/eslint',
      {
        eslint: {
            rules: { 
                semi: 'off',
                indent: [1, 4]
            }
        }
      }
    ],
    (neutrino) => {
      neutrino.config
        .output
          .filename(`${VERON}.[name].bundle.js`)
    },
    
  ]
};
