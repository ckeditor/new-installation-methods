import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Base64UploadAdapter,
  ClassicEditor,
  Essentials,
  List,
  Paragraph,
  Table,
  TableToolbar,
  TextTransformation,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageInsert,
  Indent,
  Link,
  PasteFromOffice,
  MediaEmbed,
} from "ckeditor5";

export function Editor() {
  return (
    <>
      <div id="editor">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          config={{
            plugins: [
              Essentials,
              Autoformat,
              Bold,
              Italic,
              BlockQuote,
              Base64UploadAdapter,
              Heading,
              Image,
              ImageCaption,
              ImageStyle,
              ImageToolbar,
              ImageInsert,
              Indent,
              Link,
              List,
              MediaEmbed,
              Paragraph,
              PasteFromOffice,
              Table,
              TableToolbar,
              TextTransformation,
            ],
            toolbar: {
              items: [
                "undo",
                "redo",
                "|",
                "heading",
                "|",
                "bold",
                "italic",
                "|",
                "link",
                "insertImage",
                "insertTable",
                "mediaEmbed",
                "blockQuote",
                "|",
                "bulletedList",
                "numberedList",
                "outdent",
                "indent",
              ],
            },
          }}
          onReady={() => {
            console.log("event: onReady");
            console.log(
              'Editor is ready to use! You can use "editor" variable to play with it.',
            );
          }}
          onChange={(event, editor) => {
            console.log("event: onChange", { event, editor });
          }}
          onBlur={(event, editor) => {
            console.log("event: onBlur", { event, editor });
          }}
          onFocus={(event, editor) => {
            console.log("event: onFocus", { event, editor });
          }}
        />
      </div>
    </>
  );
}
