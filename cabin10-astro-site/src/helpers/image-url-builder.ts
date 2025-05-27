import {sanityClient} from './sanity-client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient).format("webp")

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export default function urlFor(source: SanityImageSource) {
  return builder.image(source)
}