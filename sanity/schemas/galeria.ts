export default {
  name: 'galeria',
  title: 'Galerias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Direito Civil', value: 'direito-civil' },
          { title: 'Direito do Consumidor', value: 'direito-consumidor' },
          { title: 'Direito Trabalhista', value: 'direito-trabalhista' },
          { title: 'Direito Empresarial', value: 'direito-empresarial' },
          { title: 'Direito Previdenciário', value: 'direito-previdenciario' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Imagens da Galeria',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Ordem',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' },
  },
}
