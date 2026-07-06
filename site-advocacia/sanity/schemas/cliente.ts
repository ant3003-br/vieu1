export default {
  name: 'cliente',
  title: 'Clientes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'password',
      title: 'Senha de Acesso',
      type: 'string',
      description: 'Senha para o cliente acessar seus documentos',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'files',
      title: 'Arquivos',
      type: 'array',
      of: [{ type: 'file' }],
    },
  ],
  preview: {
    select: { title: 'name' },
  },
}
