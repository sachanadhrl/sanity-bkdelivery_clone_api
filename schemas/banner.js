import { defineField, defineType } from "sanity"

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'banner_promo',
      title: 'Banner Promo',
      type: 'string'
    }),
    defineField({
      name: 'banner_image',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'banner_promo',
      media: 'banner_image'
    }
  }
})