<template>
  <div style="display: flex;justify-content: center" app>
    <SimpleForm
      title="Compose"
      endpoint="/subscribers/sendemail"
      :data="compose"
      return
    >
      <div class="span-2">
        <v-text-field
          v-model="compose.title"
          outlined
          dense
          :rules="[(_) => !!compose.title || 'Please Enter Title']"
          label="Title"
        ></v-text-field>
        <v-text-field
          v-model="compose.subject"
          outlined
          dense
          :rules="[(_) => !!compose.subject || 'Please Enter Subject']"
          label="Subject"
        ></v-text-field>
      </div>
      <div class="span-2" style="margin-bottom: 30px">
        <client-only>
          <input id="file" type="file" hidden @change="uploadFunction" />
          <quill-editor
            ref="quillEdit"
            v-model="compose.data"
            :options="editorOption"
            modules="modules"
            :editor-options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          />
        </client-only>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import * as Quill from 'quill'
import ImageResize from 'quill-image-resize-vue'
import { ImageDrop } from 'quill-image-drop-module'
import { Compose } from '../../models/compose'
import SimpleForm from '../../common/ui/widgets/SimpleForm'
Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop)

export default {
  name: 'Index',
  components: { SimpleForm, quillEditor },
  props: {
    compose: {
      type: Object,
      default: () => new Compose()
    }
  },
  data() {
    return {
      selectedFile: '',
      editorOption: {
        // Some Quill options...
        theme: 'snow',
        modules: {
          imageResize: {
            module: ['Resize', 'DisplaySize', 'Toolbar']
            // handleStyles: {
            //   background: 'black',
            //   border: 'none',
            //   color: 'white'
            // }
          },
          // ImageDrop: true,
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ['clean'],
              ['image']
            ],
            handlers: {
              image() {
                document.getElementById('file').click()
              }
            }
          }
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.content = 'I was changed!'
    }, 3000)
  },
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    uploadFunction(e) {
      this.selectedFile = e.target.files[0]
      const formData = new FormData()
      formData.append('image', this.selectedFile)
      // formData.append('name', this.selectedFile.name)
      console.log(formData)
      this.$axios
        .$post('subscribers/image', formData)
        .then((r) => {
          console.log(r)
          const range = this.$refs.quillEdit.quill.getSelection()
          this.$refs.quillEdit.quill.insertEmbed(
            range.index,
            'image',
            `${this.$axios.defaults.baseURL}/uploads/${r}`
          )
        })
        .catch((e) => {
          console.log('error')
        })
    }
  }
}
</script>

<style lang="sass">
/*.form*/
/*  width: 100%*/
</style>
