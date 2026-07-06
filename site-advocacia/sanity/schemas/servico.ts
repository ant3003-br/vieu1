export default {
  name: 'servico',
  title: 'Serviços',
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
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Conteúdo Completo',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'icon',
      title: 'Ícone',
      type: 'string',
      description: 'Nome do ícone (ex: HiScale)',
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
      name: 'image',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Ordem',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
