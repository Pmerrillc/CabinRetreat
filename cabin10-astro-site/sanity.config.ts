import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {markdownSchema} from "sanity-plugin-markdown"
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'
import {CustomMarkdownInput} from "./components/CustomMarkdownInput"

export default defineConfig({
  name: 'default',
  title: 'Cabin 10 Website',
  projectId: 'peyprqn8',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), markdownSchema({input: CustomMarkdownInput})],
  schema,
  
})