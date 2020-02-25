export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e54e08b13f83501eb8337a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gi4jionp',
                  apiId: 'dfc87942-e9c6-41ca-ad0e-3a19147f854b'
                },
                {
                  buildHookId: '5e54e08be912d80197b8506e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s4ije8x1',
                  apiId: '11c2fcb7-3d58-4ba3-b220-b0c0d630f5fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hbinduni/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s4ije8x1.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
