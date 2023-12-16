/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Feature Generator',
  prompts: [
    {
      type: 'input',
      name: 'folder',
      message: 'feature name:',
    },
  ],
  actions: (answers) => {
    if (!answers.folder) {
      return;
    }

    const featureGeneratePath = 'src/features/{{folder}}';
    return [
      {
        type: 'add',
        path: featureGeneratePath + '/index.ts',
        templateFile: 'generators/features/index.ts.hbs',
      },
      {
        type: 'add',
        path: featureGeneratePath + '/components/index.ts',
      },
      {
        type: 'add',
        path: featureGeneratePath + '/routes/index.ts',
      },
    ];
  },
};
