const fs = require('fs');
const path = require('path');

const featuresDir = path.join(process.cwd(), 'src/features');
const features = fs.readdirSync(featuresDir);

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name:',
    },
    {
      type: 'list',
      name: 'feature',
      message:
        'Which feature does this component belong to(ROOT -> src/components, rest is features... )?',
      choices: ['ROOT', ...features],
      when: () => features.length > 0,
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components (if not you can type enter to skip):',
      when: ({ feature }) => !feature || feature === 'ROOT',
    },
  ],
  actions: (answers) => {
    const componentGeneratePath =
      !answers.feature || answers.feature === 'ROOT'
        ? 'src/components/{{folder}}'
        : 'src/features/{{feature}}/components';
    return [
      {
        type: 'add',
        path: componentGeneratePath + '/{{properCase name}}/index.ts',
        templateFile: 'generators/component/index.ts.hbs',
      },
      {
        type: 'add',
        path:
          componentGeneratePath +
          '/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'generators/component/Component.tsx.hbs',
      },
    ];
  },
};
