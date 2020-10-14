export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f86b6414600d29c674be46d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1dybubdo',
                  apiId: 'c442be90-bba2-42a6-90b4-fdf9dd653333'
                },
                {
                  buildHookId: '5f86b6421a8a1586b772b00a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4rxx7d1k',
                  apiId: 'd6359f05-1e61-4b7b-8d87-4df0f7b99dca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haruhi106/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4rxx7d1k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
