import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import Quill from 'quill'
import ImageResize from 'quill-image-resize-module/src/ImageResize'
import { ImageDrop } from 'quill-image-drop-module'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop)
Vue.use(VueQuillEditor /* { default global options } */)
