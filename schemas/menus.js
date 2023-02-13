import { defineField, defineType } from "sanity"

export default defineType({
  name: 'menus',
  title: 'Menus',
  type: 'document',
  fields: [
    defineField({
      name: 'menu_name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'menu_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'menu_name',
        maxLength: 100
      }
    }),
    defineField({
      name: 'menu_image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'menu_name',
      media: 'menu_image'
    }
  }
})