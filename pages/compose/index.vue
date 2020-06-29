<template>
  <div style="display: flex;justify-content: center" app>
    <SimpleForm>
      <template v-slot:header>
        <v-row>
          <v-col
            style="display: flex; align-items: center; justify-content: center"
            cols="12"
            md="1"
            sm="1"
          >
          </v-col>
          <v-col cols="12" md="11" sm="11">
            <v-card-title>Compose</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2" style="margin-bottom: 30px">
        <ckeditor
          v-model="data"
          :editor="editor"
          contenteditable="true"
          style="height: 500px; width: 100%"
        ></ckeditor>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import SimpleForm from '../../common/ui/widgets/SimpleForm'

export default {
  name: 'Index',
  components: { SimpleForm },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },

  mounted() {
    console.log(ClassicEditor)
  }
}
</script>

<style lang="sass">
/*.form*/
/*  width: 100%*/
</style>
